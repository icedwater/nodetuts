# npm

`npm` is the Node Package Manager which allows you to install existing node.js
modules. Linux users may be familiar with the idea of a package manager, which
allows the installation, upgrading and removal of pre-packaged programs. If it
sounds like the Android Play Store or the iTunes App Store to you, this is not
far from the truth.

## First run

The first time `npm` is asked to do anything that requires a list of packages,
it attempts to download from a remote site. It issues a warning similar to the
one below before downloading a package list:

    npm WARN Building the local index for the first time, please be patient
    npm http GET https://registry.npmjs.org/-/all
    npm http 503 https://registry.npmjs.org/-/all

Subsequently, the package list need not be downloaded again until changes have
been made or a forced update of the package list is ordered.

## Commands

### npm info

### npm view

### npm update

### npm install

### npm remove, un, uninstall

The `npm remove` command uninstalls a named package from its location. This is
usually a `node_modules` folder within the folder where the command was run.

### npm help

Issuing `npm help` at a command prompt shows a list of commands npm offers for
package administration:

    Usage: npm <command>

    where <command> is one of:
    add-user, adduser, apihelp, author, bin, bugs, c, cache,
    completion, config, ddp, dedupe, deprecate, docs, edit,
    explore, faq, find, find-dupes, get, help, help-search,
    home, i, info, init, install, isntall, issues, la, link,
    list, ll, ln, login, ls, outdated, owner, pack, prefix,
    prune, publish, r, rb, rebuild, remove, repo, restart, rm,
    root, run-script, s, se, search, set, show, shrinkwrap,
    star, stars, start, stop, submodule, tag, test, tst, un,
    uninstall, unlink, unpublish, unstar, up, update, v,
    version, view, whoami

    npm <cmd> -h     quick help on <cmd>
    npm -l           display full usage info
    npm faq          commonly asked questions
    npm help <term>  search for help on <term>
    npm help npm     involved overview

    Specify configs in the ini-formatted file:
        /$home/.npmrc
    or on the command line via: npm <command> --key value
    Config info can be viewed via: npm help config

    npm@1.3.21 /usr/local/lib/node_modules/npm

This is the output of the `npm help` command.
