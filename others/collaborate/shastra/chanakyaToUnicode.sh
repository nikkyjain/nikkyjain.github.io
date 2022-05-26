#!/bin/sh -f

export LANG=C.UTF-8
perl -Mutf8::all -i -pe 's/ý/ॐ/g' 1.txt
