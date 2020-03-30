const { Toolkit } = require("actions-toolkit");
var weekend = require("is-it-weekend");

Toolkit.run(async (tools) => {
  if (weekend()) {
    tools.exit.failure("No working at the weekend!");
  } else {
    tools.exit.success("Build passed");
  }
});
