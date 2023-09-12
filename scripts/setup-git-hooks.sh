#!/bin/sh

# If .git/hooks exists, delete it
if [ -d ".git/hooks" ]; then
  rm -r ".git/hooks"
fi

# Create a symbolic link from .git/hooks that points to git-hooks
ln -s ../git-hooks .git/hooks
