module.exports = {
  "endorsements?": [
      {
        "endorsement-name": "Murali Vijayaraghavan",
        "endorsement-title": "Proof Engineer",
        "endorsement-email": "vmurali@csail.mit.edu",
        "endorsement-quote": "I was Larry's supervisor at SiFive. There, he was instrumental in bringing up a formal specification of the RISC-V processor in Kami, which is a framework in Coq to specify hardware circuits using transactional semantics. The task was pretty complex, given the enormity of the RISC-V specification and the ability to understand, Kami, a new framework completely, in order to write programs in that framework. Larry was a quick learner and was highly motivated to perform this task. He paid a lot of attention to detail and had excellent software engineering skills - always coming up with unit test cases even for the smallest change made or feature added to the code base. Overall, I enjoyed working with Larry.",
        "endorsement-note": "Recieved May 13 2020 over email."
      },
      {
        "endorsement-name": "Anthony Machado",
        "endorsement-title": "Proof Engineer",
        "endorsement-email": "tj.machado@gmail.com",
        "endorsement-quote": "Working with Larry for nearly two years at SiFive I have come to know him as a man with a efficient and effective proof writing technique. As evidenced by his work in the ProcKami repository, he also shows the great attention to detail and forward planning one associates with well-written COQ code.",
        "endorsement-note": "Recieved May 13 2020 over LinkedIn."
      },
      {
        "endorsement-name": "Kenneth Roe",
        "endorsement-title": "Proof Engineer",
        "endorsement-email": "http://www.cs.jhu.edu/~roe/",
        "endorsement-quote": "Larry Lee [has] great knowledge of theorem proving as well as the ProcKami [RISC-V] processor. He was always the one I talked to when I had a question on how something worked in the ProcKami processor or a question on the Kami language semantics. It was really enjoyable working with Larry Lee while I was at SiFive.",
        "endorsement-note": "Recieved May 14 2020 over LinkedIn."
      }
    ],
  "eqn": function () {
    return function (text, render) {
      var xs = (/([^:]*):(.*)/).exec (text.trim ()).map (function (x) {return x.trim (); });
      return '<div class="eqn-labeled">' +
        '<table>' +
          '<tbody>' +
            '<tr>' +
              '<td class="eqn">' + xs [2] + '</td>' +
              '<td class="eqn-label">' + xs [1] + '</td>' +
            '</tr>' +
          '</tbody>' +
        '</table>' +
      '</div>';
    }
  }
};
