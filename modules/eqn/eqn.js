/*
The Eqn module allows you to typeset mathematical equations. It
imports the MathJAX library and defines a collection of Curly blocks
that you can use to embed these equations.
*/

/*
  The Eqn module loads the MathJAX library, defines a set of Curly
  blocks, and invokes the MathJAX render function each time a
  page loads.
*/
MODULE_LOAD_HANDLERS.add (
  function (done) {
    loadScripts ([
        'https://polyfill.io/v3/polyfill.min.js?features=es6',
        'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
      ],
      function (error) {
        if (error) { return done (error); }

        PAGE_LOAD_HANDLERS.add (
          function (id, done) {
            MathJax.typeset ();
            done ();
        });

        curly_HANDLERS.addHandlers ({
          'eqn.labeled': eqn_labeled_block
        });

        done (null);
      });
});

/*
  Accepts three arguments:

  * pageId, a string that represents the current
    page ID
  * content, a string that represents the text
    passed to this block
  * and done, a function that accepts two
    arguments: error, an Error; and expansion,
    a string.

  `content` must be a string that lists two or more
  strings separated by a colon.

  Treats the first string as a label and the
  remaining strings as a mathJAX expression. Wraps
  the expression in a table in which the label is
  placed at the end.
*/
function eqn_labeled_block (pageId, content, done) {
  var xs = (/([^:]*):(.*)/).exec (content.trim ()).map (function (x) {return x.trim (); });
  if (xs.length < 3) {
    var error = new Error ("[eqn][eqn_label_block] Error: the eqn block expects two or more arguments.");
    strictError (error);
    return done (error);
  }
  var elem = $('<div></div>')
    .append ($('<table></table>')
      .addClass ("eqn-labeled")
      .append ($('<tbody></tbody>')
        .append ($('<tr></tr>')
          .append ($('<td></td>').addClass ('eqn').html (xs [2]))
          .append ($('<td></td>').addClass ('eqn-label').html (xs [1])))));

  done (null, elem.html ());
}
