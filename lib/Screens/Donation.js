var Commands = require('../LedBoard/Commands');

module.exports = function () {
    var cmd = "";

    cmd += "\x1a4";
    cmd += Commands.Control.PATTERN_IN + Commands.Pattern.SCROLL_UP;
    cmd += Commands.Control.PATTERN_OUT + Commands.Pattern.SCROLL_UP;

    cmd += Commands.Control.FLASH + Commands.Flash.ON;

    cmd += Commands.Control.FONT_COLOR + Commands.FontColor.YGR_CHARACTER;
    cmd += "\\o/ Spende! \\o/";

    cmd += Commands.Control.FLASH + Commands.Flash.OFF;

    cmd += Commands.Pause.SECOND_2 + "04";

    return cmd;
};