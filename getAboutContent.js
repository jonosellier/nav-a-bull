content = `
{
    "name": "navigate-a-bull",
    "version": "1.0.0",
    "lockfileVersion": 1,
    "requires": true,
    "dependencies": {
      "@auth0/auth0-spa-js": {
        "version": "1.3.2",
        "resolved": "https://registry.npmjs.org/@auth0/auth0-spa-js/-/auth0-spa-js-1.3.2.tgz",
        "integrity": "sha512-+jAiN5yEjRiZxj6zkXYYJKXIcakhVmbyM/QOcsnW33Wxmhn3Vw+duCq7Z2W9TTAyV4sPokXMTDZF5JI/AEonmQ==",
        "requires": {
          "core-js": "^3.2.1",
          "es-cookie": "^1.2.0",
          "fast-text-encoding": "^1.0.0",
          "promise-polyfill": "^8.1.3",
          "unfetch": "^4.1.0"
        }
      },
      "abbrev": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
        "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="
      },
      "accepts": {
        "version": "1.3.7",
        "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
        "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
        "requires": {
          "mime-types": "~2.1.24",
          "negotiator": "0.6.2"
        }
      },
      "ansi-align": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/ansi-align/-/ansi-align-2.0.0.tgz",
        "integrity": "sha1-w2rsy6VjuJzrVW82kPCx2eNUf38=",
        "requires": {
          "string-width": "^2.0.0"
        }
      },
      "ansi-regex": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
        "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="
      },
      "ansi-styles": {
        "version": "3.2.1",
        "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
        "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
        "requires": {
          "color-convert": "^1.9.0"
        }
      },
      "anymatch": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
        "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
        "requires": {
          "micromatch": "^3.1.4",
          "normalize-path": "^2.1.1"
        },
        "dependencies": {
          "normalize-path": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
            "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
            "requires": {
              "remove-trailing-separator": "^1.0.1"
            }
          }
        }
      },
      "aproba": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
        "integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw=="
      },
      "are-we-there-yet": {
        "version": "1.1.5",
        "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-1.1.5.tgz",
        "integrity": "sha512-5hYdAkZlcG8tOLujVDTgCT+uPX0VnpAH28gWsLfzpXYm7wP6mp5Q/gYyR7YQ0cKVJcXJnl3j2kpBan13PtQf6w==",
        "requires": {
          "delegates": "^1.0.0",
          "readable-stream": "^2.0.6"
        }
      },
      "arr-diff": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
        "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA="
      },
      "arr-flatten": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
        "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg=="
      },
      "arr-union": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
        "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ="
      },
      "array-flatten": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
        "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
      },
      "array-unique": {
        "version": "0.3.2",
        "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
        "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg="
      },
      "assign-symbols": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
        "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c="
      },
      "async-each": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/async-each/-/async-each-1.0.3.tgz",
        "integrity": "sha512-z/WhQ5FPySLdvREByI2vZiTWwCnF0moMJ1hK9YQwDTHKh6I7/uSckMetoRGb5UBZPC1z0jlw+n/XCgjeH7y1AQ=="
      },
      "atob": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
        "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg=="
      },
      "balanced-match": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
        "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c="
      },
      "base": {
        "version": "0.11.2",
        "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
        "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
        "requires": {
          "cache-base": "^1.0.1",
          "class-utils": "^0.3.5",
          "component-emitter": "^1.2.1",
          "define-property": "^1.0.0",
          "isobject": "^3.0.1",
          "mixin-deep": "^1.2.0",
          "pascalcase": "^0.1.1"
        },
        "dependencies": {
          "define-property": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
            "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
            "requires": {
              "is-descriptor": "^1.0.0"
            }
          },
          "is-accessor-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
            "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-data-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
            "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-descriptor": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
            "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
            "requires": {
              "is-accessor-descriptor": "^1.0.0",
              "is-data-descriptor": "^1.0.0",
              "kind-of": "^6.0.2"
            }
          }
        }
      },
      "bcrypt": {
        "version": "3.0.6",
        "resolved": "https://registry.npmjs.org/bcrypt/-/bcrypt-3.0.6.tgz",
        "integrity": "sha512-taA5bCTfXe7FUjKroKky9EXpdhkVvhE5owfxfLYodbrAR1Ul3juLmIQmIQBK4L9a5BuUcE6cqmwT+Da20lF9tg==",
        "requires": {
          "nan": "2.13.2",
          "node-pre-gyp": "0.12.0"
        },
        "dependencies": {
          "nan": {
            "version": "2.13.2",
            "resolved": "https://registry.npmjs.org/nan/-/nan-2.13.2.tgz",
            "integrity": "sha512-TghvYc72wlMGMVMluVo9WRJc0mB8KxxF/gZ4YYFy7V2ZQX9l7rgbPg7vjS9mt6U5HXODVFVI2bOduCzwOMv/lw=="
          }
        }
      },
      "binary-extensions": {
        "version": "1.13.1",
        "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.13.1.tgz",
        "integrity": "sha512-Un7MIEDdUC5gNpcGDV97op1Ywk748MpHcFTHoYs6qnj1Z3j7I53VG3nwZhKzoBZmbdRNnb6WRdFlwl7tSDuZGw=="
      },
      "body-parser": {
        "version": "1.19.0",
        "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
        "integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
        "requires": {
          "bytes": "3.1.0",
          "content-type": "~1.0.4",
          "debug": "2.6.9",
          "depd": "~1.1.2",
          "http-errors": "1.7.2",
          "iconv-lite": "0.4.24",
          "on-finished": "~2.3.0",
          "qs": "6.7.0",
          "raw-body": "2.4.0",
          "type-is": "~1.6.17"
        }
      },
      "boxen": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/boxen/-/boxen-1.3.0.tgz",
        "integrity": "sha512-TNPjfTr432qx7yOjQyaXm3dSR0MH9vXp7eT1BFSl/C51g+EFnOR9hTg1IreahGBmDNCehscshe45f+C1TBZbLw==",
        "requires": {
          "ansi-align": "^2.0.0",
          "camelcase": "^4.0.0",
          "chalk": "^2.0.1",
          "cli-boxes": "^1.0.0",
          "string-width": "^2.0.0",
          "term-size": "^1.2.0",
          "widest-line": "^2.0.0"
        }
      },
      "brace-expansion": {
        "version": "1.1.11",
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
        "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
        "requires": {
          "balanced-match": "^1.0.0",
          "concat-map": "0.0.1"
        }
      },
      "braces": {
        "version": "2.3.2",
        "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
        "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
        "requires": {
          "arr-flatten": "^1.1.0",
          "array-unique": "^0.3.2",
          "extend-shallow": "^2.0.1",
          "fill-range": "^4.0.0",
          "isobject": "^3.0.1",
          "repeat-element": "^1.1.2",
          "snapdragon": "^0.8.1",
          "snapdragon-node": "^2.0.1",
          "split-string": "^3.0.2",
          "to-regex": "^3.0.1"
        },
        "dependencies": {
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "requires": {
              "is-extendable": "^0.1.0"
            }
          }
        }
      },
      "buffer-writer": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/buffer-writer/-/buffer-writer-2.0.0.tgz",
        "integrity": "sha512-a7ZpuTZU1TRtnwyCNW3I5dc0wWNC3VR9S++Ewyk2HHZdrO3CQJqSpd+95Us590V6AL7JqUAH2IwZ/398PmNFgw=="
      },
      "bytes": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
        "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg=="
      },
      "cache-base": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
        "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
        "requires": {
          "collection-visit": "^1.0.0",
          "component-emitter": "^1.2.1",
          "get-value": "^2.0.6",
          "has-value": "^1.0.0",
          "isobject": "^3.0.1",
          "set-value": "^2.0.0",
          "to-object-path": "^0.3.0",
          "union-value": "^1.0.0",
          "unset-value": "^1.0.0"
        }
      },
      "camelcase": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-4.1.0.tgz",
        "integrity": "sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0="
      },
      "capture-stack-trace": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/capture-stack-trace/-/capture-stack-trace-1.0.1.tgz",
        "integrity": "sha512-mYQLZnx5Qt1JgB1WEiMCf2647plpGeQ2NMR/5L0HNZzGQo4fuSPnK+wjfPnKZV0aiJDgzmWqqkV/g7JD+DW0qw=="
      },
      "chalk": {
        "version": "2.4.2",
        "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
        "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
        "requires": {
          "ansi-styles": "^3.2.1",
          "escape-string-regexp": "^1.0.5",
          "supports-color": "^5.3.0"
        }
      },
      "chokidar": {
        "version": "2.1.8",
        "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-2.1.8.tgz",
        "integrity": "sha512-ZmZUazfOzf0Nve7duiCKD23PFSCs4JPoYyccjUFF3aQkQadqBhfzhjkwBH2mNOG9cTBwhamM37EIsIkZw3nRgg==",
        "requires": {
          "anymatch": "^2.0.0",
          "async-each": "^1.0.1",
          "braces": "^2.3.2",
          "fsevents": "^1.2.7",
          "glob-parent": "^3.1.0",
          "inherits": "^2.0.3",
          "is-binary-path": "^1.0.0",
          "is-glob": "^4.0.0",
          "normalize-path": "^3.0.0",
          "path-is-absolute": "^1.0.0",
          "readdirp": "^2.2.1",
          "upath": "^1.1.1"
        }
      },
      "chownr": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.3.tgz",
        "integrity": "sha512-i70fVHhmV3DtTl6nqvZOnIjbY0Pe4kAUjwHj8z0zAdgBtYrJyYwLKCCuRBQ5ppkyL0AkN7HKRnETdmdp1zqNXw=="
      },
      "ci-info": {
        "version": "1.6.0",
        "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-1.6.0.tgz",
        "integrity": "sha512-vsGdkwSCDpWmP80ncATX7iea5DWQemg1UgCW5J8tqjU3lYw4FBYuj89J0CTVomA7BEfvSZd84GmHko+MxFQU2A=="
      },
      "class-utils": {
        "version": "0.3.6",
        "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
        "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
        "requires": {
          "arr-union": "^3.1.0",
          "define-property": "^0.2.5",
          "isobject": "^3.0.0",
          "static-extend": "^0.1.1"
        },
        "dependencies": {
          "define-property": {
            "version": "0.2.5",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
            "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
            "requires": {
              "is-descriptor": "^0.1.0"
            }
          }
        }
      },
      "cli-boxes": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/cli-boxes/-/cli-boxes-1.0.0.tgz",
        "integrity": "sha1-T6kXw+WclKAEzWH47lCdplFocUM="
      },
      "code-point-at": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
        "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c="
      },
      "collection-visit": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
        "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
        "requires": {
          "map-visit": "^1.0.0",
          "object-visit": "^1.0.0"
        }
      },
      "color-convert": {
        "version": "1.9.3",
        "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
        "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
        "requires": {
          "color-name": "1.1.3"
        }
      },
      "color-name": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
        "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
      },
      "component-emitter": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
        "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg=="
      },
      "concat-map": {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
        "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
      },
      "configstore": {
        "version": "3.1.2",
        "resolved": "https://registry.npmjs.org/configstore/-/configstore-3.1.2.tgz",
        "integrity": "sha512-vtv5HtGjcYUgFrXc6Kx747B83MRRVS5R1VTEQoXvuP+kMI+if6uywV0nDGoiydJRy4yk7h9od5Og0kxx4zUXmw==",
        "requires": {
          "dot-prop": "^4.1.0",
          "graceful-fs": "^4.1.2",
          "make-dir": "^1.0.0",
          "unique-string": "^1.0.0",
          "write-file-atomic": "^2.0.0",
          "xdg-basedir": "^3.0.0"
        }
      },
      "console-control-strings": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
        "integrity": "sha1-PXz0Rk22RG6mRL9LOVB/mFEAjo4="
      },
      "content-disposition": {
        "version": "0.5.3",
        "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
        "integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
        "requires": {
          "safe-buffer": "5.1.2"
        }
      },
      "content-type": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
        "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
      },
      "cookie": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
        "integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg=="
      },
      "cookie-signature": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
        "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
      },
      "copy-descriptor": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
        "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40="
      },
      "core-js": {
        "version": "3.3.5",
        "resolved": "https://registry.npmjs.org/core-js/-/core-js-3.3.5.tgz",
        "integrity": "sha512-0J3K+Par/ZydhKg8pEiTcK/9d65/nqJOzY62uMkjeBmt05fDOt/khUVjDdh8TpeIuGQDy1yLDDCjiWN/8pFIuw=="
      },
      "core-util-is": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
        "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
      },
      "create-error-class": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/create-error-class/-/create-error-class-3.0.2.tgz",
        "integrity": "sha1-Br56vvlHo/FKMP1hBnHUAbyot7Y=",
        "requires": {
          "capture-stack-trace": "^1.0.0"
        }
      },
      "cross-spawn": {
        "version": "5.1.0",
        "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-5.1.0.tgz",
        "integrity": "sha1-6L0O/uWPz/b4+UUQoKVUu/ojVEk=",
        "requires": {
          "lru-cache": "^4.0.1",
          "shebang-command": "^1.2.0",
          "which": "^1.2.9"
        }
      },
      "crypto-random-string": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/crypto-random-string/-/crypto-random-string-1.0.0.tgz",
        "integrity": "sha1-ojD2T1aDEOFJgAmUB5DsmVRbyn4="
      },
      "debug": {
        "version": "2.6.9",
        "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
        "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
        "requires": {
          "ms": "2.0.0"
        }
      },
      "decode-uri-component": {
        "version": "0.2.0",
        "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
        "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU="
      },
      "deep-extend": {
        "version": "0.6.0",
        "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
        "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA=="
      },
      "define-property": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
        "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
        "requires": {
          "is-descriptor": "^1.0.2",
          "isobject": "^3.0.1"
        },
        "dependencies": {
          "is-accessor-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
            "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-data-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
            "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-descriptor": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
            "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
            "requires": {
              "is-accessor-descriptor": "^1.0.0",
              "is-data-descriptor": "^1.0.0",
              "kind-of": "^6.0.2"
            }
          }
        }
      },
      "delegates": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
        "integrity": "sha1-hMbhWbgZBP3KWaDvRM2HDTElD5o="
      },
      "depd": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
        "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
      },
      "destroy": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
        "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
      },
      "detect-libc": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-1.0.3.tgz",
        "integrity": "sha1-+hN8S9aY7fVc1c0CrFWfkaTEups="
      },
      "dot-prop": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-4.2.0.tgz",
        "integrity": "sha512-tUMXrxlExSW6U2EXiiKGSBVdYgtV8qlHL+C10TsW4PURY/ic+eaysnSkwB4kA/mBlCyy/IKDJ+Lc3wbWeaXtuQ==",
        "requires": {
          "is-obj": "^1.0.0"
        }
      },
      "dotenv": {
        "version": "8.1.0",
        "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-8.1.0.tgz",
        "integrity": "sha512-GUE3gqcDCaMltj2++g6bRQ5rBJWtkWTmqmD0fo1RnnMuUqHNCt2oTPeDnS9n6fKYvlhn7AeBkb38lymBtWBQdA=="
      },
      "duplexer3": {
        "version": "0.1.4",
        "resolved": "https://registry.npmjs.org/duplexer3/-/duplexer3-0.1.4.tgz",
        "integrity": "sha1-7gHdHKwO08vH/b6jfcCo8c4ALOI="
      },
      "ee-first": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
        "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
      },
      "ejs": {
        "version": "2.7.1",
        "resolved": "https://registry.npmjs.org/ejs/-/ejs-2.7.1.tgz",
        "integrity": "sha512-kS/gEPzZs3Y1rRsbGX4UOSjtP/CeJP0CxSNZHYxGfVM/VgLcv0ZqM7C45YyTj2DI2g7+P9Dd24C+IMIg6D0nYQ=="
      },
      "encodeurl": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
        "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
      },
      "es-cookie": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/es-cookie/-/es-cookie-1.3.0.tgz",
        "integrity": "sha512-zwTwrryAbOlL2Ru+Id6irvwwrFPorqb8AHNL0dkU/u7XVwGN70qhAQoh+YIDtrk3150O//DwCA3DLgc7EjL/8g=="
      },
      "escape-html": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
        "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
      },
      "escape-string-regexp": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
        "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ="
      },
      "etag": {
        "version": "1.8.1",
        "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
        "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
      },
      "execa": {
        "version": "0.7.0",
        "resolved": "https://registry.npmjs.org/execa/-/execa-0.7.0.tgz",
        "integrity": "sha1-lEvs00zEHuMqY6n68nrVpl/Fl3c=",
        "requires": {
          "cross-spawn": "^5.0.1",
          "get-stream": "^3.0.0",
          "is-stream": "^1.1.0",
          "npm-run-path": "^2.0.0",
          "p-finally": "^1.0.0",
          "signal-exit": "^3.0.0",
          "strip-eof": "^1.0.0"
        }
      },
      "expand-brackets": {
        "version": "2.1.4",
        "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
        "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
        "requires": {
          "debug": "^2.3.3",
          "define-property": "^0.2.5",
          "extend-shallow": "^2.0.1",
          "posix-character-classes": "^0.1.0",
          "regex-not": "^1.0.0",
          "snapdragon": "^0.8.1",
          "to-regex": "^3.0.1"
        },
        "dependencies": {
          "define-property": {
            "version": "0.2.5",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
            "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
            "requires": {
              "is-descriptor": "^0.1.0"
            }
          },
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "requires": {
              "is-extendable": "^0.1.0"
            }
          }
        }
      },
      "express": {
        "version": "4.17.1",
        "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
        "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
        "requires": {
          "accepts": "~1.3.7",
          "array-flatten": "1.1.1",
          "body-parser": "1.19.0",
          "content-disposition": "0.5.3",
          "content-type": "~1.0.4",
          "cookie": "0.4.0",
          "cookie-signature": "1.0.6",
          "debug": "2.6.9",
          "depd": "~1.1.2",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "etag": "~1.8.1",
          "finalhandler": "~1.1.2",
          "fresh": "0.5.2",
          "merge-descriptors": "1.0.1",
          "methods": "~1.1.2",
          "on-finished": "~2.3.0",
          "parseurl": "~1.3.3",
          "path-to-regexp": "0.1.7",
          "proxy-addr": "~2.0.5",
          "qs": "6.7.0",
          "range-parser": "~1.2.1",
          "safe-buffer": "5.1.2",
          "send": "0.17.1",
          "serve-static": "1.14.1",
          "setprototypeof": "1.1.1",
          "statuses": "~1.5.0",
          "type-is": "~1.6.18",
          "utils-merge": "1.0.1",
          "vary": "~1.1.2"
        }
      },
      "extend-shallow": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
        "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
        "requires": {
          "assign-symbols": "^1.0.0",
          "is-extendable": "^1.0.1"
        },
        "dependencies": {
          "is-extendable": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
            "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
            "requires": {
              "is-plain-object": "^2.0.4"
            }
          }
        }
      },
      "extglob": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
        "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
        "requires": {
          "array-unique": "^0.3.2",
          "define-property": "^1.0.0",
          "expand-brackets": "^2.1.4",
          "extend-shallow": "^2.0.1",
          "fragment-cache": "^0.2.1",
          "regex-not": "^1.0.0",
          "snapdragon": "^0.8.1",
          "to-regex": "^3.0.1"
        },
        "dependencies": {
          "define-property": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
            "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
            "requires": {
              "is-descriptor": "^1.0.0"
            }
          },
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "requires": {
              "is-extendable": "^0.1.0"
            }
          },
          "is-accessor-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
            "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-data-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
            "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-descriptor": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
            "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
            "requires": {
              "is-accessor-descriptor": "^1.0.0",
              "is-data-descriptor": "^1.0.0",
              "kind-of": "^6.0.2"
            }
          }
        }
      },
      "fast-text-encoding": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/fast-text-encoding/-/fast-text-encoding-1.0.0.tgz",
        "integrity": "sha512-R9bHCvweUxxwkDwhjav5vxpFvdPGlVngtqmx4pIZfSUhM/Q4NiIUHB456BAf+Q1Nwu3HEZYONtu+Rya+af4jiQ=="
      },
      "fill-range": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
        "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
        "requires": {
          "extend-shallow": "^2.0.1",
          "is-number": "^3.0.0",
          "repeat-string": "^1.6.1",
          "to-regex-range": "^2.1.0"
        },
        "dependencies": {
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "requires": {
              "is-extendable": "^0.1.0"
            }
          }
        }
      },
      "finalhandler": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
        "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
        "requires": {
          "debug": "2.6.9",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "on-finished": "~2.3.0",
          "parseurl": "~1.3.3",
          "statuses": "~1.5.0",
          "unpipe": "~1.0.0"
        }
      },
      "for-in": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
        "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA="
      },
      "forwarded": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
        "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ="
      },
      "fragment-cache": {
        "version": "0.2.1",
        "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
        "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
        "requires": {
          "map-cache": "^0.2.2"
        }
      },
      "fresh": {
        "version": "0.5.2",
        "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
        "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
      },
      "fs-minipass": {
        "version": "1.2.7",
        "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-1.2.7.tgz",
        "integrity": "sha512-GWSSJGFy4e9GUeCcbIkED+bgAoFyj7XF1mV8rma3QW4NIqX9Kyx79N/PF61H5udOV3aY1IaMLs6pGbH71nlCTA==",
        "requires": {
          "minipass": "^2.6.0"
        }
      },
      "fs.realpath": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
        "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
      },
      "fsevents": {
        "version": "1.2.9",
        "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.9.tgz",
        "integrity": "sha512-oeyj2H3EjjonWcFjD5NvZNE9Rqe4UW+nQBU2HNeKw0koVLEFIhtyETyAakeAM3de7Z/SW5kcA+fZUait9EApnw==",
        "optional": true,
        "requires": {
          "nan": "^2.12.1",
          "node-pre-gyp": "^0.12.0"
        },
        "dependencies": {
          "abbrev": {
            "version": "1.1.1",
            "bundled": true,
            "optional": true
          },
          "ansi-regex": {
            "version": "2.1.1",
            "bundled": true
          },
          "aproba": {
            "version": "1.2.0",
            "bundled": true,
            "optional": true
          },
          "are-we-there-yet": {
            "version": "1.1.5",
            "bundled": true,
            "optional": true,
            "requires": {
              "delegates": "^1.0.0",
              "readable-stream": "^2.0.6"
            }
          },
          "balanced-match": {
            "version": "1.0.0",
            "bundled": true
          },
          "brace-expansion": {
            "version": "1.1.11",
            "bundled": true,
            "requires": {
              "balanced-match": "^1.0.0",
              "concat-map": "0.0.1"
            }
          },
          "chownr": {
            "version": "1.1.1",
            "bundled": true,
            "optional": true
          },
          "code-point-at": {
            "version": "1.1.0",
            "bundled": true,
            "optional": true
          },
          "concat-map": {
            "version": "0.0.1",
            "bundled": true
          },
          "console-control-strings": {
            "version": "1.1.0",
            "bundled": true,
            "optional": true
          },
          "core-util-is": {
            "version": "1.0.2",
            "bundled": true,
            "optional": true
          },
          "debug": {
            "version": "4.1.1",
            "bundled": true,
            "optional": true,
            "requires": {
              "ms": "^2.1.1"
            }
          },
          "deep-extend": {
            "version": "0.6.0",
            "bundled": true,
            "optional": true
          },
          "delegates": {
            "version": "1.0.0",
            "bundled": true,
            "optional": true
          },
          "detect-libc": {
            "version": "1.0.3",
            "bundled": true,
            "optional": true
          },
          "fs-minipass": {
            "version": "1.2.5",
            "bundled": true,
            "optional": true,
            "requires": {
              "minipass": "^2.2.1"
            }
          },
          "fs.realpath": {
            "version": "1.0.0",
            "bundled": true,
            "optional": true
          },
          "gauge": {
            "version": "2.7.4",
            "bundled": true,
            "optional": true,
            "requires": {
              "aproba": "^1.0.3",
              "console-control-strings": "^1.0.0",
              "has-unicode": "^2.0.0",
              "object-assign": "^4.1.0",
              "signal-exit": "^3.0.0",
              "string-width": "^1.0.1",
              "strip-ansi": "^3.0.1",
              "wide-align": "^1.1.0"
            }
          },
          "glob": {
            "version": "7.1.3",
            "bundled": true,
            "optional": true,
            "requires": {
              "fs.realpath": "^1.0.0",
              "inflight": "^1.0.4",
              "inherits": "2",
              "minimatch": "^3.0.4",
              "once": "^1.3.0",
              "path-is-absolute": "^1.0.0"
            }
          },
          "has-unicode": {
            "version": "2.0.1",
            "bundled": true,
            "optional": true
          },
          "iconv-lite": {
            "version": "0.4.24",
            "bundled": true,
            "optional": true,
            "requires": {
              "safer-buffer": ">= 2.1.2 < 3"
            }
          },
          "ignore-walk": {
            "version": "3.0.1",
            "bundled": true,
            "optional": true,
            "requires": {
              "minimatch": "^3.0.4"
            }
          },
          "inflight": {
            "version": "1.0.6",
            "bundled": true,
            "optional": true,
            "requires": {
              "once": "^1.3.0",
              "wrappy": "1"
            }
          },
          "inherits": {
            "version": "2.0.3",
            "bundled": true,
            "optional": true
          },
          "ini": {
            "version": "1.3.5",
            "bundled": true,
            "optional": true
          },
          "is-fullwidth-code-point": {
            "version": "1.0.0",
            "bundled": true,
            "optional": true,
            "requires": {
              "number-is-nan": "^1.0.0"
            }
          },
          "isarray": {
            "version": "1.0.0",
            "bundled": true,
            "optional": true
          },
          "minimatch": {
            "version": "3.0.4",
            "bundled": true,
            "requires": {
              "brace-expansion": "^1.1.7"
            }
          },
          "minimist": {
            "version": "0.0.8",
            "bundled": true
          },
          "minipass": {
            "version": "2.3.5",
            "bundled": true,
            "requires": {
              "safe-buffer": "^5.1.2",
              "yallist": "^3.0.0"
            }
          },
          "minizlib": {
            "version": "1.2.1",
            "bundled": true,
            "optional": true,
            "requires": {
              "minipass": "^2.2.1"
            }
          },
          "mkdirp": {
            "version": "0.5.1",
            "bundled": true,
            "requires": {
              "minimist": "0.0.8"
            }
          },
          "ms": {
            "version": "2.1.1",
            "bundled": true,
            "optional": true
          },
          "needle": {
            "version": "2.3.0",
            "bundled": true,
            "optional": true,
            "requires": {
              "debug": "^4.1.0",
              "iconv-lite": "^0.4.4",
              "sax": "^1.2.4"
            }
          },
          "node-pre-gyp": {
            "version": "0.12.0",
            "bundled": true,
            "optional": true,
            "requires": {
              "detect-libc": "^1.0.2",
              "mkdirp": "^0.5.1",
              "needle": "^2.2.1",
              "nopt": "^4.0.1",
              "npm-packlist": "^1.1.6",
              "npmlog": "^4.0.2",
              "rc": "^1.2.7",
              "rimraf": "^2.6.1",
              "semver": "^5.3.0",
              "tar": "^4"
            }
          },
          "nopt": {
            "version": "4.0.1",
            "bundled": true,
            "optional": true,
            "requires": {
              "abbrev": "1",
              "osenv": "^0.1.4"
            }
          },
          "npm-bundled": {
            "version": "1.0.6",
            "bundled": true,
            "optional": true
          },
          "npm-packlist": {
            "version": "1.4.1",
            "bundled": true,
            "optional": true,
            "requires": {
              "ignore-walk": "^3.0.1",
              "npm-bundled": "^1.0.1"
            }
          },
          "npmlog": {
            "version": "4.1.2",
            "bundled": true,
            "optional": true,
            "requires": {
              "are-we-there-yet": "~1.1.2",
              "console-control-strings": "~1.1.0",
              "gauge": "~2.7.3",
              "set-blocking": "~2.0.0"
            }
          },
          "number-is-nan": {
            "version": "1.0.1",
            "bundled": true,
            "optional": true
          },
          "object-assign": {
            "version": "4.1.1",
            "bundled": true,
            "optional": true
          },
          "once": {
            "version": "1.4.0",
            "bundled": true,
            "requires": {
              "wrappy": "1"
            }
          },
          "os-homedir": {
            "version": "1.0.2",
            "bundled": true,
            "optional": true
          },
          "os-tmpdir": {
            "version": "1.0.2",
            "bundled": true,
            "optional": true
          },
          "osenv": {
            "version": "0.1.5",
            "bundled": true,
            "optional": true,
            "requires": {
              "os-homedir": "^1.0.0",
              "os-tmpdir": "^1.0.0"
            }
          },
          "path-is-absolute": {
            "version": "1.0.1",
            "bundled": true,
            "optional": true
          },
          "process-nextick-args": {
            "version": "2.0.0",
            "bundled": true,
            "optional": true
          },
          "rc": {
            "version": "1.2.8",
            "bundled": true,
            "optional": true,
            "requires": {
              "deep-extend": "^0.6.0",
              "ini": "~1.3.0",
              "minimist": "^1.2.0",
              "strip-json-comments": "~2.0.1"
            },
            "dependencies": {
              "minimist": {
                "version": "1.2.0",
                "bundled": true,
                "optional": true
              }
            }
          },
          "readable-stream": {
            "version": "2.3.6",
            "bundled": true,
            "optional": true,
            "requires": {
              "core-util-is": "~1.0.0",
              "inherits": "~2.0.3",
              "isarray": "~1.0.0",
              "process-nextick-args": "~2.0.0",
              "safe-buffer": "~5.1.1",
              "string_decoder": "~1.1.1",
              "util-deprecate": "~1.0.1"
            }
          },
          "rimraf": {
            "version": "2.6.3",
            "bundled": true,
            "optional": true,
            "requires": {
              "glob": "^7.1.3"
            }
          },
          "safe-buffer": {
            "version": "5.1.2",
            "bundled": true
          },
          "safer-buffer": {
            "version": "2.1.2",
            "bundled": true,
            "optional": true
          },
          "sax": {
            "version": "1.2.4",
            "bundled": true,
            "optional": true
          },
          "semver": {
            "version": "5.7.0",
            "bundled": true,
            "optional": true
          },
          "set-blocking": {
            "version": "2.0.0",
            "bundled": true,
            "optional": true
          },
          "signal-exit": {
            "version": "3.0.2",
            "bundled": true,
            "optional": true
          },
          "string-width": {
            "version": "1.0.2",
            "bundled": true,
            "optional": true,
            "requires": {
              "code-point-at": "^1.0.0",
              "is-fullwidth-code-point": "^1.0.0",
              "strip-ansi": "^3.0.0"
            }
          },
          "string_decoder": {
            "version": "1.1.1",
            "bundled": true,
            "optional": true,
            "requires": {
              "safe-buffer": "~5.1.0"
            }
          },
          "strip-ansi": {
            "version": "3.0.1",
            "bundled": true,
            "requires": {
              "ansi-regex": "^2.0.0"
            }
          },
          "strip-json-comments": {
            "version": "2.0.1",
            "bundled": true,
            "optional": true
          },
          "tar": {
            "version": "4.4.8",
            "bundled": true,
            "optional": true,
            "requires": {
              "chownr": "^1.1.1",
              "fs-minipass": "^1.2.5",
              "minipass": "^2.3.4",
              "minizlib": "^1.1.1",
              "mkdirp": "^0.5.0",
              "safe-buffer": "^5.1.2",
              "yallist": "^3.0.2"
            }
          },
          "util-deprecate": {
            "version": "1.0.2",
            "bundled": true,
            "optional": true
          },
          "wide-align": {
            "version": "1.1.3",
            "bundled": true,
            "optional": true,
            "requires": {
              "string-width": "^1.0.2 || 2"
            }
          },
          "wrappy": {
            "version": "1.0.2",
            "bundled": true
          },
          "yallist": {
            "version": "3.0.3",
            "bundled": true
          }
        }
      },
      "gauge": {
        "version": "2.7.4",
        "resolved": "https://registry.npmjs.org/gauge/-/gauge-2.7.4.tgz",
        "integrity": "sha1-LANAXHU4w51+s3sxcCLjJfsBi/c=",
        "requires": {
          "aproba": "^1.0.3",
          "console-control-strings": "^1.0.0",
          "has-unicode": "^2.0.0",
          "object-assign": "^4.1.0",
          "signal-exit": "^3.0.0",
          "string-width": "^1.0.1",
          "strip-ansi": "^3.0.1",
          "wide-align": "^1.1.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
            "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
          },
          "is-fullwidth-code-point": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
            "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
            "requires": {
              "number-is-nan": "^1.0.0"
            }
          },
          "string-width": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
            "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
            "requires": {
              "code-point-at": "^1.0.0",
              "is-fullwidth-code-point": "^1.0.0",
              "strip-ansi": "^3.0.0"
            }
          },
          "strip-ansi": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
            "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
            "requires": {
              "ansi-regex": "^2.0.0"
            }
          }
        }
      },
      "get-stream": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-3.0.0.tgz",
        "integrity": "sha1-jpQ9E1jcN1VQVOy+LtsFqhdO3hQ="
      },
      "get-value": {
        "version": "2.0.6",
        "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
        "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg="
      },
      "glob": {
        "version": "7.1.5",
        "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.5.tgz",
        "integrity": "sha512-J9dlskqUXK1OeTOYBEn5s8aMukWMwWfs+rPTn/jn50Ux4MNXVhubL1wu/j2t+H4NVI+cXEcCaYellqaPVGXNqQ==",
        "requires": {
          "fs.realpath": "^1.0.0",
          "inflight": "^1.0.4",
          "inherits": "2",
          "minimatch": "^3.0.4",
          "once": "^1.3.0",
          "path-is-absolute": "^1.0.0"
        }
      },
      "glob-parent": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
        "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
        "requires": {
          "is-glob": "^3.1.0",
          "path-dirname": "^1.0.0"
        },
        "dependencies": {
          "is-glob": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
            "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
            "requires": {
              "is-extglob": "^2.1.0"
            }
          }
        }
      },
      "global-dirs": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/global-dirs/-/global-dirs-0.1.1.tgz",
        "integrity": "sha1-sxnA3UYH81PzvpzKTHL8FIxJ9EU=",
        "requires": {
          "ini": "^1.3.4"
        }
      },
      "got": {
        "version": "6.7.1",
        "resolved": "https://registry.npmjs.org/got/-/got-6.7.1.tgz",
        "integrity": "sha1-JAzQV4WpoY5WHcG0S0HHY+8ejbA=",
        "requires": {
          "create-error-class": "^3.0.0",
          "duplexer3": "^0.1.4",
          "get-stream": "^3.0.0",
          "is-redirect": "^1.0.0",
          "is-retry-allowed": "^1.0.0",
          "is-stream": "^1.0.0",
          "lowercase-keys": "^1.0.0",
          "safe-buffer": "^5.0.1",
          "timed-out": "^4.0.0",
          "unzip-response": "^2.0.1",
          "url-parse-lax": "^1.0.0"
        }
      },
      "graceful-fs": {
        "version": "4.2.2",
        "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.2.tgz",
        "integrity": "sha512-IItsdsea19BoLC7ELy13q1iJFNmd7ofZH5+X/pJr90/nRoPEX0DJo1dHDbgtYWOhJhcCgMDTOw84RZ72q6lB+Q=="
      },
      "has-flag": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
        "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0="
      },
      "has-unicode": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
        "integrity": "sha1-4Ob+aijPUROIVeCG0Wkedx3iqLk="
      },
      "has-value": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
        "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
        "requires": {
          "get-value": "^2.0.6",
          "has-values": "^1.0.0",
          "isobject": "^3.0.0"
        }
      },
      "has-values": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
        "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
        "requires": {
          "is-number": "^3.0.0",
          "kind-of": "^4.0.0"
        },
        "dependencies": {
          "kind-of": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
            "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
            "requires": {
              "is-buffer": "^1.1.5"
            }
          }
        }
      },
      "http-errors": {
        "version": "1.7.2",
        "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
        "integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
        "requires": {
          "depd": "~1.1.2",
          "inherits": "2.0.3",
          "setprototypeof": "1.1.1",
          "statuses": ">= 1.5.0 < 2",
          "toidentifier": "1.0.0"
        }
      },
      "iconv-lite": {
        "version": "0.4.24",
        "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
        "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
        "requires": {
          "safer-buffer": ">= 2.1.2 < 3"
        }
      },
      "ignore-by-default": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
        "integrity": "sha1-SMptcvbGo68Aqa1K5odr44ieKwk="
      },
      "ignore-walk": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/ignore-walk/-/ignore-walk-3.0.3.tgz",
        "integrity": "sha512-m7o6xuOaT1aqheYHKf8W6J5pYH85ZI9w077erOzLje3JsB1gkafkAhHHY19dqjulgIZHFm32Cp5uNZgcQqdJKw==",
        "requires": {
          "minimatch": "^3.0.4"
        }
      },
      "import-lazy": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/import-lazy/-/import-lazy-2.1.0.tgz",
        "integrity": "sha1-BWmOPUXIjo1+nZLLBYTnfwlvPkM="
      },
      "imurmurhash": {
        "version": "0.1.4",
        "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
        "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o="
      },
      "inflight": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
        "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
        "requires": {
          "once": "^1.3.0",
          "wrappy": "1"
        }
      },
      "inherits": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
        "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
      },
      "ini": {
        "version": "1.3.5",
        "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.5.tgz",
        "integrity": "sha512-RZY5huIKCMRWDUqZlEi72f/lmXKMvuszcMBduliQ3nnWbx9X/ZBQO7DijMEYS9EhHBb2qacRUMtC7svLwe0lcw=="
      },
      "ipaddr.js": {
        "version": "1.9.0",
        "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.0.tgz",
        "integrity": "sha512-M4Sjn6N/+O6/IXSJseKqHoFc+5FdGJ22sXqnjTpdZweHK64MzEPAyQZyEU3R/KRv2GLoa7nNtg/C2Ev6m7z+eA=="
      },
      "is-accessor-descriptor": {
        "version": "0.1.6",
        "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
        "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
        "requires": {
          "kind-of": "^3.0.2"
        },
        "dependencies": {
          "kind-of": {
            "version": "3.2.2",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
            "requires": {
              "is-buffer": "^1.1.5"
            }
          }
        }
      },
      "is-binary-path": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz",
        "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",
        "requires": {
          "binary-extensions": "^1.0.0"
        }
      },
      "is-buffer": {
        "version": "1.1.6",
        "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
        "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w=="
      },
      "is-ci": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-1.2.1.tgz",
        "integrity": "sha512-s6tfsaQaQi3JNciBH6shVqEDvhGut0SUXr31ag8Pd8BBbVVlcGfWhpPmEOoM6RJ5TFhbypvf5yyRw/VXW1IiWg==",
        "requires": {
          "ci-info": "^1.5.0"
        }
      },
      "is-data-descriptor": {
        "version": "0.1.4",
        "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
        "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
        "requires": {
          "kind-of": "^3.0.2"
        },
        "dependencies": {
          "kind-of": {
            "version": "3.2.2",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
            "requires": {
              "is-buffer": "^1.1.5"
            }
          }
        }
      },
      "is-descriptor": {
        "version": "0.1.6",
        "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
        "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
        "requires": {
          "is-accessor-descriptor": "^0.1.6",
          "is-data-descriptor": "^0.1.4",
          "kind-of": "^5.0.0"
        },
        "dependencies": {
          "kind-of": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
            "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw=="
          }
        }
      },
      "is-extendable": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
        "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
      },
      "is-extglob": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
        "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI="
      },
      "is-fullwidth-code-point": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
        "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
      },
      "is-glob": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
        "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
        "requires": {
          "is-extglob": "^2.1.1"
        }
      },
      "is-installed-globally": {
        "version": "0.1.0",
        "resolved": "https://registry.npmjs.org/is-installed-globally/-/is-installed-globally-0.1.0.tgz",
        "integrity": "sha1-Df2Y9akRFxbdU13aZJL2e/PSWoA=",
        "requires": {
          "global-dirs": "^0.1.0",
          "is-path-inside": "^1.0.0"
        }
      },
      "is-npm": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/is-npm/-/is-npm-1.0.0.tgz",
        "integrity": "sha1-8vtjpl5JBbQGyGBydloaTceTufQ="
      },
      "is-number": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
        "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
        "requires": {
          "kind-of": "^3.0.2"
        },
        "dependencies": {
          "kind-of": {
            "version": "3.2.2",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
            "requires": {
              "is-buffer": "^1.1.5"
            }
          }
        }
      },
      "is-obj": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-1.0.1.tgz",
        "integrity": "sha1-PkcprB9f3gJc19g6iW2rn09n2w8="
      },
      "is-path-inside": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-1.0.1.tgz",
        "integrity": "sha1-jvW33lBDej/cprToZe96pVy0gDY=",
        "requires": {
          "path-is-inside": "^1.0.1"
        }
      },
      "is-plain-object": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
        "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
        "requires": {
          "isobject": "^3.0.1"
        }
      },
      "is-redirect": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/is-redirect/-/is-redirect-1.0.0.tgz",
        "integrity": "sha1-HQPd7VO9jbDzDCbk+V02/HyH3CQ="
      },
      "is-retry-allowed": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/is-retry-allowed/-/is-retry-allowed-1.2.0.tgz",
        "integrity": "sha512-RUbUeKwvm3XG2VYamhJL1xFktgjvPzL0Hq8C+6yrWIswDy3BIXGqCxhxkc30N9jqK311gVU137K8Ei55/zVJRg=="
      },
      "is-stream": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
        "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ="
      },
      "is-windows": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
        "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA=="
      },
      "isarray": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
        "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
      },
      "isexe": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
        "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA="
      },
      "isobject": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
        "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8="
      },
      "kind-of": {
        "version": "6.0.2",
        "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
        "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA=="
      },
      "latest-version": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/latest-version/-/latest-version-3.1.0.tgz",
        "integrity": "sha1-ogU4P+oyKzO1rjsYq+4NwvNW7hU=",
        "requires": {
          "package-json": "^4.0.0"
        }
      },
      "log-prefix": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/log-prefix/-/log-prefix-0.1.1.tgz",
        "integrity": "sha512-aP1Lst8OCdZKATqzXDN0JBissNVZuiKLyo6hOXDBxaQ1jHDsaxh2J1i5Pp0zMy6ayTKDWfUlLMXyLaQe1PJ48g=="
      },
      "log-timestamp": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/log-timestamp/-/log-timestamp-0.3.0.tgz",
        "integrity": "sha512-luRz6soxijd1aJh0GkLXFjKABihxthvTfWTzu3XhCgg5EivG2bsTpSd63QFbUgS+/KmFtL+0RfSpeaD2QvOV8Q==",
        "requires": {
          "log-prefix": "0.1.1"
        }
      },
      "lowercase-keys": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
        "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA=="
      },
      "lru-cache": {
        "version": "4.1.5",
        "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
        "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
        "requires": {
          "pseudomap": "^1.0.2",
          "yallist": "^2.1.2"
        }
      },
      "make-dir": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-1.3.0.tgz",
        "integrity": "sha512-2w31R7SJtieJJnQtGc7RVL2StM2vGYVfqUOvUDxH6bC6aJTxPxTF0GnIgCyu7tjockiUWAYQRbxa7vKn34s5sQ==",
        "requires": {
          "pify": "^3.0.0"
        }
      },
      "map-cache": {
        "version": "0.2.2",
        "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
        "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8="
      },
      "map-visit": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
        "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
        "requires": {
          "object-visit": "^1.0.0"
        }
      },
      "media-typer": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
        "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g="
      },
      "merge-descriptors": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
        "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
      },
      "methods": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
        "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4="
      },
      "micromatch": {
        "version": "3.1.10",
        "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
        "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
        "requires": {
          "arr-diff": "^4.0.0",
          "array-unique": "^0.3.2",
          "braces": "^2.3.1",
          "define-property": "^2.0.2",
          "extend-shallow": "^3.0.2",
          "extglob": "^2.0.4",
          "fragment-cache": "^0.2.1",
          "kind-of": "^6.0.2",
          "nanomatch": "^1.2.9",
          "object.pick": "^1.3.0",
          "regex-not": "^1.0.0",
          "snapdragon": "^0.8.1",
          "to-regex": "^3.0.2"
        }
      },
      "mime": {
        "version": "1.6.0",
        "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
        "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
      },
      "mime-db": {
        "version": "1.40.0",
        "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.40.0.tgz",
        "integrity": "sha512-jYdeOMPy9vnxEqFRRo6ZvTZ8d9oPb+k18PKoYNYUe2stVEBPPwsln/qWzdbmaIvnhZ9v2P+CuecK+fpUfsV2mA=="
      },
      "mime-types": {
        "version": "2.1.24",
        "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.24.tgz",
        "integrity": "sha512-WaFHS3MCl5fapm3oLxU4eYDw77IQM2ACcxQ9RIxfaC3ooc6PFuBMGZZsYpvoXS5D5QTWPieo1jjLdAm3TBP3cQ==",
        "requires": {
          "mime-db": "1.40.0"
        }
      },
      "minimatch": {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
        "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
        "requires": {
          "brace-expansion": "^1.1.7"
        }
      },
      "minimist": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
        "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ="
      },
      "minipass": {
        "version": "2.9.0",
        "resolved": "https://registry.npmjs.org/minipass/-/minipass-2.9.0.tgz",
        "integrity": "sha512-wxfUjg9WebH+CUDX/CdbRlh5SmfZiy/hpkxaRI16Y9W56Pa75sWgd/rvFilSgrauD9NyFymP/+JFV3KwzIsJeg==",
        "requires": {
          "safe-buffer": "^5.1.2",
          "yallist": "^3.0.0"
        },
        "dependencies": {
          "yallist": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
            "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="
          }
        }
      },
      "minizlib": {
        "version": "1.3.3",
        "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-1.3.3.tgz",
        "integrity": "sha512-6ZYMOEnmVsdCeTJVE0W9ZD+pVnE8h9Hma/iOwwRDsdQoePpoX56/8B6z3P9VNwppJuBKNRuFDRNRqRWexT9G9Q==",
        "requires": {
          "minipass": "^2.9.0"
        }
      },
      "mixin-deep": {
        "version": "1.3.2",
        "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
        "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
        "requires": {
          "for-in": "^1.0.2",
          "is-extendable": "^1.0.1"
        },
        "dependencies": {
          "is-extendable": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
            "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
            "requires": {
              "is-plain-object": "^2.0.4"
            }
          }
        }
      },
      "mkdirp": {
        "version": "0.5.1",
        "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.1.tgz",
        "integrity": "sha1-MAV0OOrGz3+MR2fzhkjWaX11yQM=",
        "requires": {
          "minimist": "0.0.8"
        },
        "dependencies": {
          "minimist": {
            "version": "0.0.8",
            "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz",
            "integrity": "sha1-hX/Kv8M5fSYluCKCYuhqp6ARsF0="
          }
        }
      },
      "ms": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
        "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
      },
      "nan": {
        "version": "2.14.0",
        "resolved": "https://registry.npmjs.org/nan/-/nan-2.14.0.tgz",
        "integrity": "sha512-INOFj37C7k3AfaNTtX8RhsTw7qRy7eLET14cROi9+5HAVbbHuIWUHEauBv5qT4Av2tWasiTY1Jw6puUNqRJXQg==",
        "optional": true
      },
      "nanomatch": {
        "version": "1.2.13",
        "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
        "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
        "requires": {
          "arr-diff": "^4.0.0",
          "array-unique": "^0.3.2",
          "define-property": "^2.0.2",
          "extend-shallow": "^3.0.2",
          "fragment-cache": "^0.2.1",
          "is-windows": "^1.0.2",
          "kind-of": "^6.0.2",
          "object.pick": "^1.3.0",
          "regex-not": "^1.0.0",
          "snapdragon": "^0.8.1",
          "to-regex": "^3.0.1"
        }
      },
      "needle": {
        "version": "2.4.0",
        "resolved": "https://registry.npmjs.org/needle/-/needle-2.4.0.tgz",
        "integrity": "sha512-4Hnwzr3mi5L97hMYeNl8wRW/Onhy4nUKR/lVemJ8gJedxxUyBLm9kkrDColJvoSfwi0jCNhD+xCdOtiGDQiRZg==",
        "requires": {
          "debug": "^3.2.6",
          "iconv-lite": "^0.4.4",
          "sax": "^1.2.4"
        },
        "dependencies": {
          "debug": {
            "version": "3.2.6",
            "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.6.tgz",
            "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
            "requires": {
              "ms": "^2.1.1"
            }
          },
          "ms": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
          }
        }
      },
      "negotiator": {
        "version": "0.6.2",
        "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
        "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw=="
      },
      "node-pre-gyp": {
        "version": "0.12.0",
        "resolved": "https://registry.npmjs.org/node-pre-gyp/-/node-pre-gyp-0.12.0.tgz",
        "integrity": "sha512-4KghwV8vH5k+g2ylT+sLTjy5wmUOb9vPhnM8NHvRf9dHmnW/CndrFXy2aRPaPST6dugXSdHXfeaHQm77PIz/1A==",
        "requires": {
          "detect-libc": "^1.0.2",
          "mkdirp": "^0.5.1",
          "needle": "^2.2.1",
          "nopt": "^4.0.1",
          "npm-packlist": "^1.1.6",
          "npmlog": "^4.0.2",
          "rc": "^1.2.7",
          "rimraf": "^2.6.1",
          "semver": "^5.3.0",
          "tar": "^4"
        },
        "dependencies": {
          "nopt": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/nopt/-/nopt-4.0.1.tgz",
            "integrity": "sha1-0NRoWv1UFRk8jHUFYC0NF81kR00=",
            "requires": {
              "abbrev": "1",
              "osenv": "^0.1.4"
            }
          }
        }
      },
      "nodemon": {
        "version": "1.19.2",
        "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-1.19.2.tgz",
        "integrity": "sha512-hRLYaw5Ihyw9zK7NF+9EUzVyS6Cvgc14yh8CAYr38tPxJa6UrOxwAQ351GwrgoanHCF0FalQFn6w5eoX/LGdJw==",
        "requires": {
          "chokidar": "^2.1.5",
          "debug": "^3.1.0",
          "ignore-by-default": "^1.0.1",
          "minimatch": "^3.0.4",
          "pstree.remy": "^1.1.6",
          "semver": "^5.5.0",
          "supports-color": "^5.2.0",
          "touch": "^3.1.0",
          "undefsafe": "^2.0.2",
          "update-notifier": "^2.5.0"
        },
        "dependencies": {
          "debug": {
            "version": "3.2.6",
            "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.6.tgz",
            "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
            "requires": {
              "ms": "^2.1.1"
            }
          },
          "ms": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
          }
        }
      },
      "nopt": {
        "version": "1.0.10",
        "resolved": "https://registry.npmjs.org/nopt/-/nopt-1.0.10.tgz",
        "integrity": "sha1-bd0hvSoxQXuScn3Vhfim83YI6+4=",
        "requires": {
          "abbrev": "1"
        }
      },
      "normalize-path": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
        "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="
      },
      "npm-bundled": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/npm-bundled/-/npm-bundled-1.0.6.tgz",
        "integrity": "sha512-8/JCaftHwbd//k6y2rEWp6k1wxVfpFzB6t1p825+cUb7Ym2XQfhwIC5KwhrvzZRJu+LtDE585zVaS32+CGtf0g=="
      },
      "npm-packlist": {
        "version": "1.4.6",
        "resolved": "https://registry.npmjs.org/npm-packlist/-/npm-packlist-1.4.6.tgz",
        "integrity": "sha512-u65uQdb+qwtGvEJh/DgQgW1Xg7sqeNbmxYyrvlNznaVTjV3E5P6F/EFjM+BVHXl7JJlsdG8A64M0XI8FI/IOlg==",
        "requires": {
          "ignore-walk": "^3.0.1",
          "npm-bundled": "^1.0.1"
        }
      },
      "npm-run-path": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz",
        "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
        "requires": {
          "path-key": "^2.0.0"
        }
      },
      "npmlog": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-4.1.2.tgz",
        "integrity": "sha512-2uUqazuKlTaSI/dC8AzicUck7+IrEaOnN/e0jd3Xtt1KcGpwx30v50mL7oPyr/h9bL3E4aZccVwpwP+5W9Vjkg==",
        "requires": {
          "are-we-there-yet": "~1.1.2",
          "console-control-strings": "~1.1.0",
          "gauge": "~2.7.3",
          "set-blocking": "~2.0.0"
        }
      },
      "number-is-nan": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
        "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0="
      },
      "object-assign": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
        "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
      },
      "object-copy": {
        "version": "0.1.0",
        "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
        "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
        "requires": {
          "copy-descriptor": "^0.1.0",
          "define-property": "^0.2.5",
          "kind-of": "^3.0.3"
        },
        "dependencies": {
          "define-property": {
            "version": "0.2.5",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
            "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
            "requires": {
              "is-descriptor": "^0.1.0"
            }
          },
          "kind-of": {
            "version": "3.2.2",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
            "requires": {
              "is-buffer": "^1.1.5"
            }
          }
        }
      },
      "object-visit": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
        "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
        "requires": {
          "isobject": "^3.0.0"
        }
      },
      "object.pick": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
        "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
        "requires": {
          "isobject": "^3.0.1"
        }
      },
      "on-finished": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
        "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
        "requires": {
          "ee-first": "1.1.1"
        }
      },
      "once": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
        "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
        "requires": {
          "wrappy": "1"
        }
      },
      "os-homedir": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
        "integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M="
      },
      "os-tmpdir": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
        "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ="
      },
      "osenv": {
        "version": "0.1.5",
        "resolved": "https://registry.npmjs.org/osenv/-/osenv-0.1.5.tgz",
        "integrity": "sha512-0CWcCECdMVc2Rw3U5w9ZjqX6ga6ubk1xDVKxtBQPK7wis/0F2r9T6k4ydGYhecl7YUBxBVxhL5oisPsNxAPe2g==",
        "requires": {
          "os-homedir": "^1.0.0",
          "os-tmpdir": "^1.0.0"
        }
      },
      "p-finally": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
        "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4="
      },
      "package-json": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/package-json/-/package-json-4.0.1.tgz",
        "integrity": "sha1-iGmgQBJTZhxMTKPabCEh7VVfXu0=",
        "requires": {
          "got": "^6.7.1",
          "registry-auth-token": "^3.0.1",
          "registry-url": "^3.0.3",
          "semver": "^5.1.0"
        }
      },
      "packet-reader": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/packet-reader/-/packet-reader-1.0.0.tgz",
        "integrity": "sha512-HAKu/fG3HpHFO0AA8WE8q2g+gBJaZ9MG7fcKk+IJPLTGAD6Psw4443l+9DGRbOIh3/aXr7Phy0TjilYivJo5XQ=="
      },
      "parseurl": {
        "version": "1.3.3",
        "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
        "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
      },
      "pascalcase": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
        "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ="
      },
      "path-dirname": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz",
        "integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA="
      },
      "path-is-absolute": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
        "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
      },
      "path-is-inside": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/path-is-inside/-/path-is-inside-1.0.2.tgz",
        "integrity": "sha1-NlQX3t5EQw0cEa9hAn+s8HS9/FM="
      },
      "path-key": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
        "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A="
      },
      "path-to-regexp": {
        "version": "0.1.7",
        "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
        "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
      },
      "pg": {
        "version": "7.12.1",
        "resolved": "https://registry.npmjs.org/pg/-/pg-7.12.1.tgz",
        "integrity": "sha512-l1UuyfEvoswYfcUe6k+JaxiN+5vkOgYcVSbSuw3FvdLqDbaoa2RJo1zfJKfPsSYPFVERd4GHvX3s2PjG1asSDA==",
        "requires": {
          "buffer-writer": "2.0.0",
          "packet-reader": "1.0.0",
          "pg-connection-string": "0.1.3",
          "pg-pool": "^2.0.4",
          "pg-types": "^2.1.0",
          "pgpass": "1.x",
          "semver": "4.3.2"
        },
        "dependencies": {
          "semver": {
            "version": "4.3.2",
            "resolved": "https://registry.npmjs.org/semver/-/semver-4.3.2.tgz",
            "integrity": "sha1-x6BxWKgL7dBSNVt3DYLWZA+AO+c="
          }
        }
      },
      "pg-connection-string": {
        "version": "0.1.3",
        "resolved": "https://registry.npmjs.org/pg-connection-string/-/pg-connection-string-0.1.3.tgz",
        "integrity": "sha1-2hhHsglA5C7hSSvq9l1J2RskXfc="
      },
      "pg-int8": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/pg-int8/-/pg-int8-1.0.1.tgz",
        "integrity": "sha512-WCtabS6t3c8SkpDBUlb1kjOs7l66xsGdKpIPZsg4wR+B3+u9UAum2odSsF9tnvxg80h4ZxLWMy4pRjOsFIqQpw=="
      },
      "pg-pool": {
        "version": "2.0.7",
        "resolved": "https://registry.npmjs.org/pg-pool/-/pg-pool-2.0.7.tgz",
        "integrity": "sha512-UiJyO5B9zZpu32GSlP0tXy8J2NsJ9EFGFfz5v6PSbdz/1hBLX1rNiiy5+mAm5iJJYwfCv4A0EBcQLGWwjbpzZw=="
      },
      "pg-types": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/pg-types/-/pg-types-2.2.0.tgz",
        "integrity": "sha512-qTAAlrEsl8s4OiEQY69wDvcMIdQN6wdz5ojQiOy6YRMuynxenON0O5oCpJI6lshc6scgAY8qvJ2On/p+CXY0GA==",
        "requires": {
          "pg-int8": "1.0.1",
          "postgres-array": "~2.0.0",
          "postgres-bytea": "~1.0.0",
          "postgres-date": "~1.0.4",
          "postgres-interval": "^1.1.0"
        }
      },
      "pgpass": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/pgpass/-/pgpass-1.0.2.tgz",
        "integrity": "sha1-Knu0G2BltnkH6R2hsHwYR8h3swY=",
        "requires": {
          "split": "^1.0.0"
        }
      },
      "pify": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
        "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY="
      },
      "posix-character-classes": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
        "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs="
      },
      "postgres-array": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/postgres-array/-/postgres-array-2.0.0.tgz",
        "integrity": "sha512-VpZrUqU5A69eQyW2c5CA1jtLecCsN2U/bD6VilrFDWq5+5UIEVO7nazS3TEcHf1zuPYO/sqGvUvW62g86RXZuA=="
      },
      "postgres-bytea": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/postgres-bytea/-/postgres-bytea-1.0.0.tgz",
        "integrity": "sha1-AntTPAqokOJtFy1Hz5zOzFIazTU="
      },
      "postgres-date": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/postgres-date/-/postgres-date-1.0.4.tgz",
        "integrity": "sha512-bESRvKVuTrjoBluEcpv2346+6kgB7UlnqWZsnbnCccTNq/pqfj1j6oBaN5+b/NrDXepYUT/HKadqv3iS9lJuVA=="
      },
      "postgres-interval": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/postgres-interval/-/postgres-interval-1.2.0.tgz",
        "integrity": "sha512-9ZhXKM/rw350N1ovuWHbGxnGh/SNJ4cnxHiM0rxE4VN41wsg8P8zWn9hv/buK00RP4WvlOyr/RBDiptyxVbkZQ==",
        "requires": {
          "xtend": "^4.0.0"
        }
      },
      "prepend-http": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-1.0.4.tgz",
        "integrity": "sha1-1PRWKwzjaW5BrFLQ4ALlemNdxtw="
      },
      "process-nextick-args": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
        "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
      },
      "promise-polyfill": {
        "version": "8.1.3",
        "resolved": "https://registry.npmjs.org/promise-polyfill/-/promise-polyfill-8.1.3.tgz",
        "integrity": "sha512-MG5r82wBzh7pSKDRa9y+vllNHz3e3d4CNj1PQE4BQYxLme0gKYYBm9YENq+UkEikyZ0XbiGWxYlVw3Rl9O/U8g=="
      },
      "proxy-addr": {
        "version": "2.0.5",
        "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.5.tgz",
        "integrity": "sha512-t/7RxHXPH6cJtP0pRG6smSr9QJidhB+3kXu0KgXnbGYMgzEnUxRQ4/LDdfOwZEMyIh3/xHb8PX3t+lfL9z+YVQ==",
        "requires": {
          "forwarded": "~0.1.2",
          "ipaddr.js": "1.9.0"
        }
      },
      "pseudomap": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
        "integrity": "sha1-8FKijacOYYkX7wqKw0wa5aaChrM="
      },
      "pstree.remy": {
        "version": "1.1.7",
        "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.7.tgz",
        "integrity": "sha512-xsMgrUwRpuGskEzBFkH8NmTimbZ5PcPup0LA8JJkHIm2IMUbQcpo3yeLNWVrufEYjh8YwtSVh0xz6UeWc5Oh5A=="
      },
      "qs": {
        "version": "6.7.0",
        "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
        "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ=="
      },
      "range-parser": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
        "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
      },
      "raw-body": {
        "version": "2.4.0",
        "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
        "integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
        "requires": {
          "bytes": "3.1.0",
          "http-errors": "1.7.2",
          "iconv-lite": "0.4.24",
          "unpipe": "1.0.0"
        }
      },
      "rc": {
        "version": "1.2.8",
        "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
        "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
        "requires": {
          "deep-extend": "^0.6.0",
          "ini": "~1.3.0",
          "minimist": "^1.2.0",
          "strip-json-comments": "~2.0.1"
        }
      },
      "readable-stream": {
        "version": "2.3.6",
        "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
        "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
        "requires": {
          "core-util-is": "~1.0.0",
          "inherits": "~2.0.3",
          "isarray": "~1.0.0",
          "process-nextick-args": "~2.0.0",
          "safe-buffer": "~5.1.1",
          "string_decoder": "~1.1.1",
          "util-deprecate": "~1.0.1"
        }
      },
      "readdirp": {
        "version": "2.2.1",
        "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-2.2.1.tgz",
        "integrity": "sha512-1JU/8q+VgFZyxwrJ+SVIOsh+KywWGpds3NTqikiKpDMZWScmAYyKIgqkO+ARvNWJfXeXR1zxz7aHF4u4CyH6vQ==",
        "requires": {
          "graceful-fs": "^4.1.11",
          "micromatch": "^3.1.10",
          "readable-stream": "^2.0.2"
        }
      },
      "regex-not": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
        "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
        "requires": {
          "extend-shallow": "^3.0.2",
          "safe-regex": "^1.1.0"
        }
      },
      "registry-auth-token": {
        "version": "3.4.0",
        "resolved": "https://registry.npmjs.org/registry-auth-token/-/registry-auth-token-3.4.0.tgz",
        "integrity": "sha512-4LM6Fw8eBQdwMYcES4yTnn2TqIasbXuwDx3um+QRs7S55aMKCBKBxvPXl2RiUjHwuJLTyYfxSpmfSAjQpcuP+A==",
        "requires": {
          "rc": "^1.1.6",
          "safe-buffer": "^5.0.1"
        }
      },
      "registry-url": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/registry-url/-/registry-url-3.1.0.tgz",
        "integrity": "sha1-PU74cPc93h138M+aOBQyRE4XSUI=",
        "requires": {
          "rc": "^1.0.1"
        }
      },
      "remove-trailing-separator": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
        "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8="
      },
      "repeat-element": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.3.tgz",
        "integrity": "sha512-ahGq0ZnV5m5XtZLMb+vP76kcAM5nkLqk0lpqAuojSKGgQtn4eRi4ZZGm2olo2zKFH+sMsWaqOCW1dqAnOru72g=="
      },
      "repeat-string": {
        "version": "1.6.1",
        "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
        "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc="
      },
      "resolve-url": {
        "version": "0.2.1",
        "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
        "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo="
      },
      "ret": {
        "version": "0.1.15",
        "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
        "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg=="
      },
      "rimraf": {
        "version": "2.7.1",
        "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
        "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
        "requires": {
          "glob": "^7.1.3"
        }
      },
      "safe-buffer": {
        "version": "5.1.2",
        "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
        "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
      },
      "safe-regex": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
        "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
        "requires": {
          "ret": "~0.1.10"
        }
      },
      "safer-buffer": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
        "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
      },
      "sax": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
        "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=="
      },
      "semver": {
        "version": "5.7.1",
        "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
        "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
      },
      "semver-diff": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/semver-diff/-/semver-diff-2.1.0.tgz",
        "integrity": "sha1-S7uEN8jTfksM8aaP1ybsbWRdbTY=",
        "requires": {
          "semver": "^5.0.3"
        }
      },
      "send": {
        "version": "0.17.1",
        "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
        "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
        "requires": {
          "debug": "2.6.9",
          "depd": "~1.1.2",
          "destroy": "~1.0.4",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "etag": "~1.8.1",
          "fresh": "0.5.2",
          "http-errors": "~1.7.2",
          "mime": "1.6.0",
          "ms": "2.1.1",
          "on-finished": "~2.3.0",
          "range-parser": "~1.2.1",
          "statuses": "~1.5.0"
        },
        "dependencies": {
          "ms": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
            "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg=="
          }
        }
      },
      "serve-static": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
        "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
        "requires": {
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "parseurl": "~1.3.3",
          "send": "0.17.1"
        }
      },
      "set-blocking": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
        "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc="
      },
      "set-value": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
        "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
        "requires": {
          "extend-shallow": "^2.0.1",
          "is-extendable": "^0.1.1",
          "is-plain-object": "^2.0.3",
          "split-string": "^3.0.1"
        },
        "dependencies": {
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "requires": {
              "is-extendable": "^0.1.0"
            }
          }
        }
      },
      "setprototypeof": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
        "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw=="
      },
      "shebang-command": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
        "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
        "requires": {
          "shebang-regex": "^1.0.0"
        }
      },
      "shebang-regex": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
        "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM="
      },
      "signal-exit": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.2.tgz",
        "integrity": "sha1-tf3AjxKH6hF4Yo5BXiUTK3NkbG0="
      },
      "snapdragon": {
        "version": "0.8.2",
        "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
        "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
        "requires": {
          "base": "^0.11.1",
          "debug": "^2.2.0",
          "define-property": "^0.2.5",
          "extend-shallow": "^2.0.1",
          "map-cache": "^0.2.2",
          "source-map": "^0.5.6",
          "source-map-resolve": "^0.5.0",
          "use": "^3.1.0"
        },
        "dependencies": {
          "define-property": {
            "version": "0.2.5",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
            "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
            "requires": {
              "is-descriptor": "^0.1.0"
            }
          },
          "extend-shallow": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
            "requires": {
              "is-extendable": "^0.1.0"
            }
          }
        }
      },
      "snapdragon-node": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
        "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
        "requires": {
          "define-property": "^1.0.0",
          "isobject": "^3.0.0",
          "snapdragon-util": "^3.0.1"
        },
        "dependencies": {
          "define-property": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
            "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
            "requires": {
              "is-descriptor": "^1.0.0"
            }
          },
          "is-accessor-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
            "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-data-descriptor": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
            "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
            "requires": {
              "kind-of": "^6.0.0"
            }
          },
          "is-descriptor": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
            "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
            "requires": {
              "is-accessor-descriptor": "^1.0.0",
              "is-data-descriptor": "^1.0.0",
              "kind-of": "^6.0.2"
            }
          }
        }
      },
      "snapdragon-util": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
        "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
        "requires": {
          "kind-of": "^3.2.0"
        },
        "dependencies": {
          "kind-of": {
            "version": "3.2.2",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
            "requires": {
              "is-buffer": "^1.1.5"
            }
          }
        }
      },
      "source-map": {
        "version": "0.5.7",
        "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
        "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
      },
      "source-map-resolve": {
        "version": "0.5.2",
        "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.2.tgz",
        "integrity": "sha512-MjqsvNwyz1s0k81Goz/9vRBe9SZdB09Bdw+/zYyO+3CuPk6fouTaxscHkgtE8jKvf01kVfl8riHzERQ/kefaSA==",
        "requires": {
          "atob": "^2.1.1",
          "decode-uri-component": "^0.2.0",
          "resolve-url": "^0.2.1",
          "source-map-url": "^0.4.0",
          "urix": "^0.1.0"
        }
      },
      "source-map-url": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.0.tgz",
        "integrity": "sha1-PpNdfd1zYxuXZZlW1VEo6HtQhKM="
      },
      "split": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/split/-/split-1.0.1.tgz",
        "integrity": "sha512-mTyOoPbrivtXnwnIxZRFYRrPNtEFKlpB2fvjSnCQUiAA6qAZzqwna5envK4uk6OIeP17CsdF3rSBGYVBsU0Tkg==",
        "requires": {
          "through": "2"
        }
      },
      "split-string": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
        "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
        "requires": {
          "extend-shallow": "^3.0.0"
        }
      },
      "static-extend": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
        "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
        "requires": {
          "define-property": "^0.2.5",
          "object-copy": "^0.1.0"
        },
        "dependencies": {
          "define-property": {
            "version": "0.2.5",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
            "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
            "requires": {
              "is-descriptor": "^0.1.0"
            }
          }
        }
      },
      "statuses": {
        "version": "1.5.0",
        "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
        "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow="
      },
      "string-width": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
        "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
        "requires": {
          "is-fullwidth-code-point": "^2.0.0",
          "strip-ansi": "^4.0.0"
        }
      },
      "string_decoder": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
        "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
        "requires": {
          "safe-buffer": "~5.1.0"
        }
      },
      "strip-ansi": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
        "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
        "requires": {
          "ansi-regex": "^3.0.0"
        }
      },
      "strip-eof": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",
        "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8="
      },
      "strip-json-comments": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
        "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo="
      },
      "supports-color": {
        "version": "5.5.0",
        "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
        "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
        "requires": {
          "has-flag": "^3.0.0"
        }
      },
      "tar": {
        "version": "4.4.13",
        "resolved": "https://registry.npmjs.org/tar/-/tar-4.4.13.tgz",
        "integrity": "sha512-w2VwSrBoHa5BsSyH+KxEqeQBAllHhccyMFVHtGtdMpF4W7IRWfZjFiQceJPChOeTsSDVUpER2T8FA93pr0L+QA==",
        "requires": {
          "chownr": "^1.1.1",
          "fs-minipass": "^1.2.5",
          "minipass": "^2.8.6",
          "minizlib": "^1.2.1",
          "mkdirp": "^0.5.0",
          "safe-buffer": "^5.1.2",
          "yallist": "^3.0.3"
        },
        "dependencies": {
          "yallist": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
            "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="
          }
        }
      },
      "term-size": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/term-size/-/term-size-1.2.0.tgz",
        "integrity": "sha1-RYuDiH8oj8Vtb/+/rSYuJmOO+mk=",
        "requires": {
          "execa": "^0.7.0"
        }
      },
      "through": {
        "version": "2.3.8",
        "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
        "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU="
      },
      "timed-out": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/timed-out/-/timed-out-4.0.1.tgz",
        "integrity": "sha1-8y6srFoXW+ol1/q1Zas+2HQe9W8="
      },
      "to-object-path": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
        "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
        "requires": {
          "kind-of": "^3.0.2"
        },
        "dependencies": {
          "kind-of": {
            "version": "3.2.2",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
            "requires": {
              "is-buffer": "^1.1.5"
            }
          }
        }
      },
      "to-regex": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
        "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
        "requires": {
          "define-property": "^2.0.2",
          "extend-shallow": "^3.0.2",
          "regex-not": "^1.0.2",
          "safe-regex": "^1.1.0"
        }
      },
      "to-regex-range": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
        "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
        "requires": {
          "is-number": "^3.0.0",
          "repeat-string": "^1.6.1"
        }
      },
      "toidentifier": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
        "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw=="
      },
      "touch": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.0.tgz",
        "integrity": "sha512-WBx8Uy5TLtOSRtIq+M03/sKDrXCLHxwDcquSP2c43Le03/9serjQBIztjRz6FkJez9D/hleyAXTBGLwwZUw9lA==",
        "requires": {
          "nopt": "~1.0.10"
        }
      },
      "type-is": {
        "version": "1.6.18",
        "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
        "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
        "requires": {
          "media-typer": "0.3.0",
          "mime-types": "~2.1.24"
        }
      },
      "undefsafe": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.2.tgz",
        "integrity": "sha1-Il9rngM3Zj4Njnz9aG/Cg2zKznY=",
        "requires": {
          "debug": "^2.2.0"
        }
      },
      "unfetch": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/unfetch/-/unfetch-4.1.0.tgz",
        "integrity": "sha512-crP/n3eAPUJxZXM9T80/yv0YhkTEx2K1D3h7D1AJM6fzsWZrxdyRuLN0JH/dkZh1LNH8LxCnBzoPFCPbb2iGpg=="
      },
      "union-value": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
        "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
        "requires": {
          "arr-union": "^3.1.0",
          "get-value": "^2.0.6",
          "is-extendable": "^0.1.1",
          "set-value": "^2.0.1"
        }
      },
      "unique-string": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/unique-string/-/unique-string-1.0.0.tgz",
        "integrity": "sha1-nhBXzKhRq7kzmPizOuGHuZyuwRo=",
        "requires": {
          "crypto-random-string": "^1.0.0"
        }
      },
      "unpipe": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
        "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
      },
      "unset-value": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
        "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
        "requires": {
          "has-value": "^0.3.1",
          "isobject": "^3.0.0"
        },
        "dependencies": {
          "has-value": {
            "version": "0.3.1",
            "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
            "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
            "requires": {
              "get-value": "^2.0.3",
              "has-values": "^0.1.4",
              "isobject": "^2.0.0"
            },
            "dependencies": {
              "isobject": {
                "version": "2.1.0",
                "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
                "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
                "requires": {
                  "isarray": "1.0.0"
                }
              }
            }
          },
          "has-values": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
            "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E="
          }
        }
      },
      "unzip-response": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/unzip-response/-/unzip-response-2.0.1.tgz",
        "integrity": "sha1-0vD3N9FrBhXnKmk17QQhRXLVb5c="
      },
      "upath": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/upath/-/upath-1.2.0.tgz",
        "integrity": "sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg=="
      },
      "update-notifier": {
        "version": "2.5.0",
        "resolved": "https://registry.npmjs.org/update-notifier/-/update-notifier-2.5.0.tgz",
        "integrity": "sha512-gwMdhgJHGuj/+wHJJs9e6PcCszpxR1b236igrOkUofGhqJuG+amlIKwApH1IW1WWl7ovZxsX49lMBWLxSdm5Dw==",
        "requires": {
          "boxen": "^1.2.1",
          "chalk": "^2.0.1",
          "configstore": "^3.0.0",
          "import-lazy": "^2.1.0",
          "is-ci": "^1.0.10",
          "is-installed-globally": "^0.1.0",
          "is-npm": "^1.0.0",
          "latest-version": "^3.0.0",
          "semver-diff": "^2.0.0",
          "xdg-basedir": "^3.0.0"
        }
      },
      "urix": {
        "version": "0.1.0",
        "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
        "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI="
      },
      "url-parse-lax": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-1.0.0.tgz",
        "integrity": "sha1-evjzA2Rem9eaJy56FKxovAYJ2nM=",
        "requires": {
          "prepend-http": "^1.0.1"
        }
      },
      "use": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
        "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ=="
      },
      "util-deprecate": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
        "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
      },
      "utils-merge": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
        "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM="
      },
      "vary": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
        "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw="
      },
      "which": {
        "version": "1.3.1",
        "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
        "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
        "requires": {
          "isexe": "^2.0.0"
        }
      },
      "wide-align": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.3.tgz",
        "integrity": "sha512-QGkOQc8XL6Bt5PwnsExKBPuMKBxnGxWWW3fU55Xt4feHozMUhdUMaBCk290qpm/wG5u/RSKzwdAC4i51YigihA==",
        "requires": {
          "string-width": "^1.0.2 || 2"
        }
      },
      "widest-line": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/widest-line/-/widest-line-2.0.1.tgz",
        "integrity": "sha512-Ba5m9/Fa4Xt9eb2ELXt77JxVDV8w7qQrH0zS/TWSJdLyAwQjWoOzpzj5lwVftDz6n/EOu3tNACS84v509qwnJA==",
        "requires": {
          "string-width": "^2.1.1"
        }
      },
      "wrappy": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
        "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
      },
      "write-file-atomic": {
        "version": "2.4.3",
        "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-2.4.3.tgz",
        "integrity": "sha512-GaETH5wwsX+GcnzhPgKcKjJ6M2Cq3/iZp1WyY/X1CSqrW+jVNM9Y7D8EC2sM4ZG/V8wZlSniJnCKWPmBYAucRQ==",
        "requires": {
          "graceful-fs": "^4.1.11",
          "imurmurhash": "^0.1.4",
          "signal-exit": "^3.0.2"
        }
      },
      "xdg-basedir": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/xdg-basedir/-/xdg-basedir-3.0.0.tgz",
        "integrity": "sha1-SWsswQnsqNus/i3HK2A8F8WHCtQ="
      },
      "xtend": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
        "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ=="
      },
      "yallist": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
        "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI="
      }
    }
  }
`;

req = JSON.parse(content);
for (var dependancy in req.dependencies) {
    console.log("<li>" + dependancy + ": version " + req.dependencies[dependancy].version + "</li>");
}