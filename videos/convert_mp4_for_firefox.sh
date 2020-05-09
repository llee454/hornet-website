#!/bin/bash

FILEPATH="$1"
TMPPATH=$(mktemp).mp4

/usr/bin/ffmpeg -i "$FILEPATH" -pix_fmt yuv420p -vcodec libx264 -crf 20 "$TMPPATH"
/bin/rm -f "$FILEPATH"
/bin/mv "$TMPPATH" "$FILEPATH"

