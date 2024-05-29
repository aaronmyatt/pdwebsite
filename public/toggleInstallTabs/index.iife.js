var PD;
(PD ||= {}).toggleInstallTabs = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../Library/Caches/deno/deno_esbuild/jsonpointer@5.0.1/node_modules/jsonpointer/jsonpointer.js
  var require_jsonpointer = __commonJS({
    "../../Library/Caches/deno/deno_esbuild/jsonpointer@5.0.1/node_modules/jsonpointer/jsonpointer.js"(exports) {
      var hasExcape = /~/;
      var escapeMatcher = /~[01]/g;
      function escapeReplacer(m) {
        switch (m) {
          case "~1":
            return "/";
          case "~0":
            return "~";
        }
        throw new Error("Invalid tilde escape: " + m);
      }
      function untilde(str) {
        if (!hasExcape.test(str)) return str;
        return str.replace(escapeMatcher, escapeReplacer);
      }
      function setter(obj, pointer, value) {
        var part;
        var hasNextPart;
        for (var p = 1, len = pointer.length; p < len; ) {
          if (pointer[p] === "constructor" || pointer[p] === "prototype" || pointer[p] === "__proto__") return obj;
          part = untilde(pointer[p++]);
          hasNextPart = len > p;
          if (typeof obj[part] === "undefined") {
            if (Array.isArray(obj) && part === "-") {
              part = obj.length;
            }
            if (hasNextPart) {
              if (pointer[p] !== "" && pointer[p] < Infinity || pointer[p] === "-") obj[part] = [];
              else obj[part] = {};
            }
          }
          if (!hasNextPart) break;
          obj = obj[part];
        }
        var oldValue = obj[part];
        if (value === void 0) delete obj[part];
        else obj[part] = value;
        return oldValue;
      }
      function compilePointer(pointer) {
        if (typeof pointer === "string") {
          pointer = pointer.split("/");
          if (pointer[0] === "") return pointer;
          throw new Error("Invalid JSON pointer.");
        } else if (Array.isArray(pointer)) {
          for (const part of pointer) {
            if (typeof part !== "string" && typeof part !== "number") {
              throw new Error("Invalid JSON pointer. Must be of type string or number.");
            }
          }
          return pointer;
        }
        throw new Error("Invalid JSON pointer.");
      }
      function get(obj, pointer) {
        if (typeof obj !== "object") throw new Error("Invalid input object.");
        pointer = compilePointer(pointer);
        var len = pointer.length;
        if (len === 1) return obj;
        for (var p = 1; p < len; ) {
          obj = obj[untilde(pointer[p++])];
          if (len === p) return obj;
          if (typeof obj !== "object" || obj === null) return void 0;
        }
      }
      function set(obj, pointer, value) {
        if (typeof obj !== "object") throw new Error("Invalid input object.");
        pointer = compilePointer(pointer);
        if (pointer.length === 0) throw new Error("Invalid JSON pointer for set.");
        return setter(obj, pointer, value);
      }
      function compile(pointer) {
        var compiled = compilePointer(pointer);
        return {
          get: function(object) {
            return get(object, compiled);
          },
          set: function(object, value) {
            return set(object, compiled, value);
          }
        };
      }
      exports.get = get;
      exports.set = set;
      exports.compile = compile;
    }
  });

  // .pd/scripts/toggleInstallTabs/index.ts
  var toggleInstallTabs_exports = {};
  __export(toggleInstallTabs_exports, {
    default: () => toggleInstallTabs_default2,
    pipe: () => pipe,
    rawPipe: () => toggleInstallTabs_default
  });

  // https://jsr.io/@pd/pdpipe/0.1.1/pipeline.ts
  var Pipeline = class {
    stages = [];
    defaultArgs = {};
    constructor(presetStages = [], defaultArgs = {}) {
      this.defaultArgs = defaultArgs;
      this.stages = presetStages || [];
    }
    pipe(stage) {
      this.stages.push(stage);
      return this;
    }
    process(args) {
      args = Object.assign({}, this.defaultArgs, args);
      if (this.stages.length === 0) {
        return args;
      }
      let stageOutput = Promise.resolve(args);
      this.stages.forEach(function(stage, _counter) {
        stageOutput = stageOutput.then(stage);
      });
      return stageOutput;
    }
  };
  var pipeline_default = Pipeline;

  // https://jsr.io/@pd/pointers/0.1.0/mod.ts
  var import_npm_jsonpointer_5_0 = __toESM(require_jsonpointer());
  var setNew = (data, path) => {
    const tmpObj = {};
    import_npm_jsonpointer_5_0.default.set(tmpObj, path, data);
    return tmpObj;
  };
  Object.defineProperty(import_npm_jsonpointer_5_0.default, "new", { value: setNew, writable: false, configurable: false, enumerable: false });
  var mod_default = import_npm_jsonpointer_5_0.default;

  // https://jsr.io/@pd/pdpipe/0.1.1/pdUtils.ts
  function funcWrapper(funcs, opts) {
    opts.$p = mod_default;
    return funcs.map((func, index) => async function(input) {
      const funcConfig = mod_default.get(opts, "/steps/" + index + "/config");
      if (funcConfig && funcConfig.checks && funcConfig.checks.length > 0) {
        const checks = funcConfig.checks.reduce((acc, check) => {
          acc[check] = mod_default.get(input, check);
          return acc;
        }, {});
        opts.checks = checks;
        if (!Object.values(checks).some((check) => !!check)) {
          return input;
        }
      }
      if (funcConfig && funcConfig.routes && input.request) {
        const route = funcConfig.routes.map((route2) => new URLPattern({ pathname: route2 })).find((route2) => {
          return route2.test(input.request.url);
        });
        if (!route) {
          return input;
        }
        input.route = route.exec(input.request.url);
      }
      const only = funcConfig && funcConfig.only || input.only;
      if (only && only !== index) {
        return input;
      }
      const stop = funcConfig && funcConfig.stop || input.stop;
      if (index > stop) {
        return input;
      }
      if (input.errors && input.errors.length > 0) {
        return input;
      }
      try {
        await func(input, opts);
      } catch (e) {
        input.errors = input.errors || [];
        input.errors.push({
          message: e.message,
          stack: e.stack,
          name: e.name,
          func: func.name
        });
      }
      return input;
    }).map((func, index) => {
      Object.defineProperty(func, "name", { value: `${index}-${funcs[index].name}` });
      return func;
    });
  }

  // https://jsr.io/@pd/pdpipe/0.1.1/mod.ts
  function Pipe(funcs, opts) {
    const wrappedFuncs = funcWrapper(funcs, opts);
    return new pipeline_default(wrappedFuncs);
  }

  // .pd/scripts/toggleInstallTabs/index.json
  var toggleInstallTabs_default = {
    fileName: "toggleInstallTabs",
    dir: ".pd/scripts/toggleInstallTabs",
    config: {
      on: {},
      emit: true,
      persist: true,
      processedDir: "./pages/html/processed",
      build: [
        "iife"
      ]
    },
    name: "ToggleTabs",
    camelName: "toggleTabs",
    steps: [
      {
        name: "emitStartEvent",
        code: "const event = new CustomEvent('pd:pipe:start', {detail: {input, opts}})\n          dispatchEvent(event)",
        funcName: "emitStartEvent",
        inList: false,
        range: [
          0,
          0
        ],
        internal: true
      },
      {
        name: "persistInput",
        code: "\n      const kvAvailable = typeof Deno !== 'undefined' && typeof Deno.openKv === 'function'\n      if(kvAvailable) {\n        try {\n          const db = await Deno.openKv()\n          const key = ['pd', 'input', opts.fileName]\n          try {\n              await db.set(key, JSON.stringify(input))\n          } catch (e) {\n            const safe = {\n              error: e.message,\n            }\n            for (const [k, v] of Object.entries(input)) {\n                safe[k] = typeof v;\n            }\n            await db.set(key, safe)\n          }\n        } catch (e) {\n            console.error(e)\n        }\n      } else {\n        const key = 'pd:input:' + opts.fileName \n        const inputJson = localStorage.getItem(key) || '[]'\n        const storedJson = JSON.parse(inputJson)\n        storedJson.push(JSON.stringify(input))\n        localStorage.setItem(key, JSON.stringify(storedJson))\n      }\n      ",
        funcName: "persistInput",
        inList: false,
        range: [
          0,
          0
        ],
        internal: true
      },
      {
        code: `input.selector = '[name="installTabs"]'
`,
        range: [
          9,
          11
        ],
        name: "ToggleTabs",
        funcName: "toggleTabs",
        inList: false
      },
      {
        code: "input.el = document.querySelector(input.selector)\n",
        range: [
          15,
          17
        ],
        name: "grabElement",
        funcName: "grabElement",
        inList: false
      },
      {
        code: "input.cb = (event) => {\n    event.preventDefault();\n    event.stopPropagation();\n\n    let clickIndex = 0;\n    input.el.querySelectorAll('a').forEach((el, index) => {\n        if(el === event.target){\n            clickIndex = index;\n            el.classList.add('border-indigo-500')\n            el.classList.add('text-indigo-600')\n        } else {\n            el.classList.remove('border-indigo-500')\n            el.classList.remove('text-indigo-600')\n        }\n    })\n\n    input.el.querySelectorAll('.tabcontent').forEach((el, index) => {\n        if(index === clickIndex){\n            el.classList.remove('hidden');\n        } else {\n            el.classList.add('hidden');\n        }\n    })\n}\n",
        range: [
          39,
          41
        ],
        name: "callback",
        funcName: "callback",
        inList: false
      },
      {
        code: "input.el.querySelectorAll('a').forEach(el => {\n    el.addEventListener('click', input.cb);\n});\n",
        range: [
          45,
          47
        ],
        name: "registerListener",
        funcName: "registerListener",
        inList: false
      },
      {
        name: "persistOutput",
        code: "\n      const kvAvailable = typeof Deno !== 'undefined' && typeof Deno.openKv === 'function'\n      if(kvAvailable) {\n        try {\n          const db = await Deno.openKv()\n          const key = ['pd', 'output', opts.fileName]\n          try {\n              await db.set(key, JSON.stringify(input))\n          } catch (e) {\n            const safe = {\n              error: e.message,\n            }\n            for (const [k, v] of Object.entries(input)) {\n                safe[k] = typeof v;\n            }\n            await db.set(key, safe)\n          }\n        } catch (e) {\n            console.error(e)\n        }\n      } else {\n        const key = 'pd:output:' + opts.fileName \n        const inputJson = localStorage.getItem(key) || '[]'\n        const storedJson = JSON.parse(inputJson)\n        storedJson.push(JSON.stringify(input))\n        localStorage.setItem(key, JSON.stringify(storedJson))\n      }\n      ",
        funcName: "persistOutput",
        inList: false,
        range: [
          0,
          0
        ],
        internal: true
      },
      {
        name: "emitEndEvent",
        code: "const event = new CustomEvent('pd:pipe:end', {detail: {input, opts}})\n          dispatchEvent(event)",
        funcName: "emitEndEvent",
        inList: false,
        range: [
          0,
          0
        ],
        internal: true
      }
    ]
  };

  // .pd/scripts/toggleInstallTabs/index.ts
  async function emitStartEvent(input, opts) {
    const event = new CustomEvent("pd:pipe:start", { detail: { input, opts } });
    dispatchEvent(event);
  }
  async function persistInput(input, opts) {
    const kvAvailable = typeof Deno !== "undefined" && typeof Deno.openKv === "function";
    if (kvAvailable) {
      try {
        const db = await Deno.openKv();
        const key = ["pd", "input", opts.fileName];
        try {
          await db.set(key, JSON.stringify(input));
        } catch (e) {
          const safe = {
            error: e.message
          };
          for (const [k, v] of Object.entries(input)) {
            safe[k] = typeof v;
          }
          await db.set(key, safe);
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      const key = "pd:input:" + opts.fileName;
      const inputJson = localStorage.getItem(key) || "[]";
      const storedJson = JSON.parse(inputJson);
      storedJson.push(JSON.stringify(input));
      localStorage.setItem(key, JSON.stringify(storedJson));
    }
  }
  async function toggleTabs(input, opts) {
    input.selector = '[name="installTabs"]';
  }
  async function grabElement(input, opts) {
    input.el = document.querySelector(input.selector);
  }
  async function callback(input, opts) {
    input.cb = (event) => {
      event.preventDefault();
      event.stopPropagation();
      let clickIndex = 0;
      input.el.querySelectorAll("a").forEach((el, index) => {
        if (el === event.target) {
          clickIndex = index;
          el.classList.add("border-indigo-500");
          el.classList.add("text-indigo-600");
        } else {
          el.classList.remove("border-indigo-500");
          el.classList.remove("text-indigo-600");
        }
      });
      input.el.querySelectorAll(".tabcontent").forEach((el, index) => {
        if (index === clickIndex) {
          el.classList.remove("hidden");
        } else {
          el.classList.add("hidden");
        }
      });
    };
  }
  async function registerListener(input, opts) {
    input.el.querySelectorAll("a").forEach((el) => {
      el.addEventListener("click", input.cb);
    });
  }
  async function persistOutput(input, opts) {
    const kvAvailable = typeof Deno !== "undefined" && typeof Deno.openKv === "function";
    if (kvAvailable) {
      try {
        const db = await Deno.openKv();
        const key = ["pd", "output", opts.fileName];
        try {
          await db.set(key, JSON.stringify(input));
        } catch (e) {
          const safe = {
            error: e.message
          };
          for (const [k, v] of Object.entries(input)) {
            safe[k] = typeof v;
          }
          await db.set(key, safe);
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      const key = "pd:output:" + opts.fileName;
      const inputJson = localStorage.getItem(key) || "[]";
      const storedJson = JSON.parse(inputJson);
      storedJson.push(JSON.stringify(input));
      localStorage.setItem(key, JSON.stringify(storedJson));
    }
  }
  async function emitEndEvent(input, opts) {
    const event = new CustomEvent("pd:pipe:end", { detail: { input, opts } });
    dispatchEvent(event);
  }
  var funcSequence = [
    emitStartEvent,
    persistInput,
    toggleTabs,
    grabElement,
    callback,
    registerListener,
    persistOutput,
    emitEndEvent
  ];
  var pipe = Pipe(funcSequence, toggleInstallTabs_default);
  pipe.json = toggleInstallTabs_default;
  var toggleInstallTabs_default2 = pipe;
  return __toCommonJS(toggleInstallTabs_exports);
})();
