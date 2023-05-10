#!/bin/sh

# If .git/hooks exists, delete it
if [ -d ".git/hooks" ]; then
  rm -r ".git/hooks"
fi

# Create a symbolic link from .git/hooks that points to src/hooks
ln -s ../src/hooks .git/hooks
