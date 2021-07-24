'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var MIN_X_THRESHOLD = 20;
var MAX_Y_THRESHOLD = 50;
var TWO_FINGER_SWIPE_THRESHOLD = 120;
function sameDirection(delta1, delta2) {
    return delta1 * delta2 > 0 || delta1 === delta2;
}
var SwipeManager = /** @class */ (function () {
    function SwipeManager(onTwoFingerSwipe) {
        this.gestureState = "notouch";
        this.onTwoFingerSwipe = onTwoFingerSwipe;
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
    }
    SwipeManager.prototype.handleTouchStart = function (e) {
        if (this.gestureState === "notouch" && e.touches.length === 2) {
            this.gestureState = "considering";
        }
        else {
            return;
        }
        this.touchDeltas = [];
        for (var i = 0; i < e.touches.length; i++) {
            var touch = e.touches[i];
            this.touchDeltas.push({
                x: touch.clientX,
                y: touch.clientY,
            });
        }
    };
    SwipeManager.prototype.handleTouchMove = function (e) {
        if (["considering", "tracking"].includes(this.gestureState)) {
            e.stopImmediatePropagation();
        }
        if (this.gestureState === "considering") {
            var fingerOneDelta = this.touchDeltas[0];
            var x1Diff = fingerOneDelta.x - e.touches[0].clientX;
            var y1Diff = fingerOneDelta.y - e.touches[0].clientY;
            var fingerTwoDelta = this.touchDeltas[0];
            var x2Diff = fingerTwoDelta.x - e.touches[0].clientX;
            var y2Diff = fingerTwoDelta.y - e.touches[0].clientY;
            if (Math.abs(y1Diff) > MAX_Y_THRESHOLD ||
                Math.abs(y2Diff) > MAX_Y_THRESHOLD ||
                !sameDirection(x1Diff, x2Diff)) {
                this.gestureState = "invalid";
            }
            if (Math.abs(x1Diff) > MIN_X_THRESHOLD ||
                Math.abs(x2Diff) > MIN_X_THRESHOLD) {
                this.gestureState = "tracking";
                e.stopImmediatePropagation();
            }
        }
    };
    SwipeManager.prototype.handleTouchEnd = function (e) {
        if (this.gestureState === "tracking" || this.gestureState === "complete") {
            e.stopImmediatePropagation();
        }
        if (this.gestureState === "tracking") {
            var fingerOneDelta = this.touchDeltas[0];
            var x1Diff = fingerOneDelta.x - e.touches[0].clientX;
            var fingerTwoDelta = this.touchDeltas[0];
            var x2Diff = fingerTwoDelta.x - e.touches[0].clientX;
            if (x1Diff && x2Diff > TWO_FINGER_SWIPE_THRESHOLD) {
                this.onTwoFingerSwipe("left");
            }
            else if (x1Diff && x2Diff < -TWO_FINGER_SWIPE_THRESHOLD) {
                this.onTwoFingerSwipe("right");
            }
            this.gestureState = "complete";
        }
        if (e.touches.length === 0) {
            this.gestureState = "notouch";
        }
    };
    return SwipeManager;
}());

var SwipeNavigationPlugin = /** @class */ (function (_super) {
    __extends(SwipeNavigationPlugin, _super);
    function SwipeNavigationPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwipeNavigationPlugin.prototype.handleSwipe = function (direction) {
        if (direction === "right") {
            history.back();
            new obsidian.Notice("⇠ Go back");
        }
        else {
            history.forward();
            new obsidian.Notice("⇢ Go forward");
        }
    };
    SwipeNavigationPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.handleSwipe = this.handleSwipe.bind(this);
                this.swipeManager = new SwipeManager(this.handleSwipe);
                document.body.addEventListener("touchstart", this.swipeManager.handleTouchStart, false);
                document.body.addEventListener("touchmove", this.swipeManager.handleTouchMove, true);
                document.body.addEventListener("touchend", this.swipeManager.handleTouchEnd, false);
                return [2 /*return*/];
            });
        });
    };
    SwipeNavigationPlugin.prototype.onunload = function () {
        this.swipeManager.handleTouchStart;
        document.body.removeEventListener("touchstart", this.swipeManager.handleTouchStart);
        document.body.removeEventListener("touchmove", this.swipeManager.handleTouchMove);
        document.body.removeEventListener("touchend", this.swipeManager.handleTouchEnd);
    };
    return SwipeNavigationPlugin;
}(obsidian.Plugin));

module.exports = SwipeNavigationPlugin;
