#!/bin/sh
find . -exec  git check-ignore {} + | xargs -I{} basename {}