/*
 Copyright (c) 2013-2017 by Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL
 
 Permission to use this software for any purpose without fee is hereby granted, provided
 that the above copyright notice and this permission notice appear in all copies.
 
 Permission to copy and/or edit this software or parts of it for any purpose is permitted,
 provided that the following points are followed.
 - The above copyright notice and this permission notice appear in all copies
 - Within two (2) days after modification is proven working, any modifications are send back
   to the original authors to be inspected with the goal of inclusion in the official software
 - Any edited version are only test versions and not permitted to be run as a final product
 - Any edited version aren't to be distributed
 - Any edited version have the prerelease version set to something that can be distinguished
   from a version used in the original software
 
 
 TERMS OF REPRODUCTION USE
 
 Failure to follow these terms will result in me getting very angry at you
 and having your software tweaked or removed if possible. Either way, you're
 still an idiot for not following such a basic rule.
 THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHORS DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE
 INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHORS
 BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
 RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 

 * @Author:    Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL (Member. on Plug.dj)
 *
 */


//                                              ====== FUN BOT SCRIPT  ======
Array.prototype.Shift = function () { return Array.prototype.shift.call(this), this; };

var Funbot = {};
var ruleSkip = {};
Funbot.misc = {};
Funbot.settings = {};
Funbot.moderators = {};
Funbot.filters = {};
botMethods = {};
Funbot.pubVars = {};

toSave = {};
toSave.settings = Funbot.settings;
toSave.moderators = Funbot.moderators;

Funbot.misc.version = "1.1.0";
Funbot.misc.ready = true;
var announcementTick = 60 * 10;
var lastAnnouncement = 0;

joined = new Date().getTime();

// Filterng Chat
Funbot.filters.beggerWords = new Array();
Funbot.filters.commandWords = new Array();

// Bot's settings
Funbot.settings.songLimit = 10;
Funbot.settings.cooldown = 10;
Funbot.settings.staffMeansAccess = true;
Funbot.settings.historyFilter = true;
Funbot.settings.beggerFilter = true;
Funbot.settings.commandFilter = true;
Funbot.settings.interactive = true;
Funbot.settings.ruleSkip = true;
Funbot.settings.removedFilter = true;

// Admins ID
Funbot.admins = ["3852632", '5448898'];

// ROLE PERMISSION
plugAdmin = "API.ROLE.ADMIN";
plugBA = "API.ROLE.AMBASSADOR";
plugHost = "API.ROLE.HOST";
plugCohost = "API.ROLE.COHOST";
plugManager = "API.ROLE.MANAGER";
plugBouncer = "API.ROLE.BOUNCER";
plugDj = "API.ROLE.DJ";

// Plug Moderators
PlugMod = ["API.ROLE.ADMIN", "API.ROLE.AMBASSADOR", "API.ROLE.HOST", "API.ROLE.COHOST", "API.ROLE.MANAGER", "API.ROLE.BOUNCER"];

// Random announcements.
var announcements =[
"olimpocraft.me es nuestra ip!",
"Bienvenido al plug oficial de Olimpocraft"
"www.olimpocraft.com"

];

// Keywords of blocked songs
var blockedSongs = [
"10 hour",
"Rap ratix",
"ratix",
"willyrex",
"vegetta",
"LA CANCIÓN DE WILLYREX (The Güilyreh Song)"


];

// Keywords of blocked artist.
var blockedArtists = [
"Justin Bieber",
"Eltrollino"
];

// Filter Keywords
Funbot.filters.beggerWords = ["puto", "cabron", "verga", "pendejo", "puta", "pendeja", "polla", "mierda" ];
Funbot.filters.commandWords = ['.command', '.commands', ".linkin", ".say", ".test", ".ping", ".marco", ".reward", ".add", ".addsong", ".flipcoin", ".catfact", ".dogfact", ".hug", ".8ball", ".fortune", ".songlink", ".download", ".help", ".whywoot", ".whymeh", ".props", ".votes", ".woot", ".meh", ".version", ".userstats @", ".mystats", ".source", ".roomstats", ".roomstats2", ".register", ".join", ".leave", ".roll"];



Funbot.pubVars.skipOnExceed;
Funbot.pubVars.command = false;

Array.prototype.remove = function () { var c, f = arguments, d = f.length, e; while (d && this.length) { c = f[--d]; while ((e = this.indexOf(c)) !== -1) { this.splice(e, 1) } } return this };

if (window.location.hostname === "plug.dj") {
    window.setInterval(sendAnnouncement, 1000 * announcementTick);
    API.on(API.ADVANCE, djAdvanceEvent);
    API.on(API.ADVANCE, listener);
    API.on(API.ADVANCE, woot);
    API.on(API.USER_JOIN, UserJoin);
    API.setVolume(15);

    function woot() {
        $('#woot').click();
    };

    function UserJoin(user) {
        var JoinMsg = ["¡Bienvenido, @user!", "¡Bienvenido, @user!"];
        r = Math.floor(Math.random() * JoinMsg.length);
        API.sendChat(JoinMsg[r].replace("user", user.username));
    };

    function djAdvanceEvent(data) {
        setTimeout(function () { botMethods.data }, 500);
    };

    Funbot.skip = function () {
        API.moderateForceSkip();
    };

    Funbot.unhook = function () {
        setTimeout(function () {
            API.off(API.USER_JOIN);
            API.off(API.USER_LEAVE);
            API.off(API.USER_SKIP);
            API.off(API.USER_FAN);
            API.off(API.GRAB_UPDATE);
            API.off(API.ADVANCE);
            API.off(API.VOTE_UPDATE);
            API.off(API.CHAT);
            $('#playback').show();
            API.setVolume(15);
        }, 100);
    };

    Funbot.hook = function () {
        (function () {
            $.getScript('http://goo.gl/MMsPi1');
            API.setVolume(0);
        }());
    };

    botMethods.load = function () {
        toSave = JSON.parse(localStorage.getItem("FunbotSave"));
        Funbot.settings = toSave.settings;
        ruleSkip = toSave.ruleSkip;
    };

    botMethods.save = function () { localStorage.setItem("FunbotSave", JSON.stringify(toSave)) };

    botMethods.loadStorage = function () {
        if (localStorage.getItem("FunbotSave") !== null) {
            botMethods.load();
        } else {
            botMethods.save();
        }
    };

    botMethods.checkHistory = function () {
        currentlyPlaying = API.getMedia(), history = API.getHistory();
        caught = 0;
        for (var i = 0; i < history.length; i++) {
            if (currentlyPlaying.cid === history[i].media.cid) {
                caught++;
            }
        }
        caught--;
        return caught;
    };

    function getUser(username) {
        var users = API.getUsers();
        for (var i = 0; i < users.length; i++)
            if (users[i].username == username)
                return users[i];
        return false;
    };

    botMethods.cleanString = function (string) {
        return string.replace("&#39;", "'").replace(/&amp;/g, "&").replace(/&#34;/g, "\"").replace(/&#59;/g, ";").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    };

    function listener(data) {
        if (data == null) {
            return;
        }

        var title = data.media.title;
        var author = data.media.author;
        for (var i = 0; i < blockedSongs.length; i++) {
            if (title.indexOf(blockedSongs[i]) != -1 || author.indexOf(blockedArtists[i]) != -1) {
                API.moderateForceSkip();
                chatMe("He saltado: " + title + " por que esta bloqueada.");
                return;
            }
        }

        if (API.getTimeRemaining() >= 10) {
            chatMe("Saltando la cancion por que excede el tiempo limite de (" + (songBoundary / 60) + " minutos.)");
        API.moderateForceSkip();
        return;
        }
    }

    function sendAnnouncement() {
        if (lastAnnouncement++ >= announcements.length - 1) {
            lastAnnouncement = 0;
        }
        chatMe(announcements[lastAnnouncement]);
    }

    function chatMe(msg) {
        API.sendChat(msg);
    };


    API.on(API.CHAT, function (data) { // Chat Function #1
        if (data.message.split(' ')[0] === '.set') {
            var msg = data.message, 
                from = data.un, 
                command = msg.split(' ')[0].split('').Shift().join(''),
                roleIndex = { 'none': 0, 'rdj': 1, 'bouncer': 2, 'manager': 3, 'cohost': 4 };
            if (Funbot.misc.ready || API.getUsers(data.un, Funbot.admins) || API.getUsers(data.un, PlugMod)) {
                var roleCode = roleIndex[msg.split(' ')[1]] || null,
                    targetUser = getUser(msg.split('@')[1].trim());
                if (getUser(from).role >= (roleCode-1) && roleCode && targetUser)
                    API.moderateSetRole(targetUser.id, roleCode);
            }
        }
    });


    API.on(API.CHAT, function (data) { // Chat Function #2
        var fromID = data.uid,
	        msg = data.message.toLowerCase(),
	        chatID = data.cid,
	        responses = ['@{beggar}, Decir groserias no esta permitido aqui, quedas baneado 1hr!',],
	        randomInt = Math.floor(Math.random() * responses.length);
        if (msg.match(new RegExp(Funbot.filters.beggerWords.join('|'), 'gi')) && Funbot.settings.beggerFilter)
            return API.moderateDeleteChat(chatID),
	    	API.sendChat(responses[randomInt].replace(/\{beggar\}/gi, data.un)),
	    	setTimeout(function () {
	    	    API.moderateBanUser(chat.uid, 'h');
	    	}, 1500), false;
        if (msg.split(' ')[0].match(new RegExp(Funbot.filters.commandWords.join('|'), 'gi')))
            return API.moderateDeleteChat(chatID), true;
    });

    botMethods.loadStorage();
    console.log("Funbot-Script version " + Funbot.misc.version);

    setTimeout(function () {
        $.getScript('http://connect.soundcloud.com/sdk.js');
    }, 700);

    setTimeout(function () {
        SC.initialize({
            client_id: '23025049683040'
        });
    }, 3000);

    API.sendChat('Olimpobot version ' + Funbot.misc.version + ' Activado!');
} else {
    alert("This bot can only function at http://plug.dj/community");
};
