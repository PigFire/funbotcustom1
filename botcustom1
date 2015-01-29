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

Funbot.misc.version = "3.0.12";
Funbot.misc.ready = true;
var songBoundary = 60 * 10;
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
var announcements =
[""];

// Keywords of blocked songs
var blockedSongs = [
"10 hour",
"Rap ratix"
"ratix"
"willyrex"
"vegetta"
"LA CANCIÓN DE WILLYREX (The Güilyreh Song)"


];

// Keywords of blocked artist.
var blockedArtists = [
"Justin Bieber",
];

// Filter Keywords
Funbot.filters.beggerWords = ["puto", "cabron", "verga", "pendejo", "puta", "pendeja", "polla" ];
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

        var songLenRaw = $("#time-remaining-value").text();
        var songLenParts = songLenRaw.split(":");
        var songLen = (parseInt(songLenParts[0].substring(1)) * 60) + parseInt(songLenParts[1]);
        if (songLen >= songBoundary) {
            window.setTimeout(skipLongSong, 1000 * songBoundary);
        }
    }

    function skipLongSong() {
        chatMe("Saltando la cancion por que excede el tiempo limite de (" + (songBoundary / 60) + " minutos.)");
        API.moderateForceSkip();
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


    API.on(API.CHAT, function (data) { // Chat Function #0
        if (data.message.indexOf('.') === 0) {
            var msg = data.message, from = data.un, fromID = data.unID;
            var id = data.unID;
            var msg = data.message;
            var userfrom = data.un;
            var command = msg.substring(1).split(' ');
            if (typeof command[2] != "undefined") {
                for (var i = 2; i < command.length; i++) {
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if (Funbot.misc.ready || API.getUsers(data.un, Funbot.admins) || API.hasPermission(plugAdmin) || API.hasPermission(plugBA) || API.hasPermission(plugHost) || API.hasPermission(plugCohost) || API.hasPermission(plugManager) || API.hasPermission(plugBouncer) || API.hasPermission(plugDj)) {
                switch (command[0].toLowerCase()) {

                    case "test":
                        if (API.getUsers(data.un, Funbot.admins)) {
                            API.sendChat("@" + data.un + " Test aprovado");
                        } else {
                            API.sendChat("Este comando requiere permisos de : Admin!");
                        }
                        break;

                    case "ping":
                        if (API.getUsers(data.un, PlugMod)) {
                            API.sendChat("@" + data.un + " Pong!");
                        } else {
                            API.sendChat('Tienes que ser miembro del staff para hacer eso!');
                        }
                        break;

                    case "skip":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)) {
                            Funbot.skip();
                        } else {
                            API.sendChat('Tienes que ser miembro del staff para hacer eso!');
                        }
                        break;

                    case "unlock":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)) {
                            API.moderateLockWaitList(false);
                        } else {
                            API.sendChat('Tienes que ser miembro del staff para hacer eso!');
                        }
                        break;

                    case "add":
                        if (API.getUsers(data.un) || API.getUsers(data.un, Funbot.admins)) {
                            API.moderateAddDJ(data.un);
                        }
                        break;

                    case "remove":
                        if (API.getUsers(data.un) || API.getUsers(data.un, Funbot.admins)) {
                            API.moderateRemoveDJ(data.unID);
                        }
                        break;

                    case "ban":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins) || typeof command[1] == "undefined") {
                            var username = msg.indexOf('@') + 1;
                            var userid = getUser(username).id;
                            API.moderateBanUser(userid, 0, API.BAN.HOUR);
                        } else {
                            API.sendChat('Tienes que ser miembro del staff para hacer eso!');
                        }
                        break;

                    case "queup":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins) || typeof command[1] == "undefined") {
                            var username = msg.indexOf('@') + 1;
                            var userid = getUser(username).id;
                            API.moderateAddDJ(userid);
                        } else {
                            API.sendChat('Tienes que ser miembro del staff para hacer eso!');
                        }
                        break;

                    case "quedown":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)) {
                            var username = msg.substr(msg.indexOf('@') + 1);
                            var userid = getUser(username).id;
                            API.moderateRemoveDJ(userid);
                        } else {
                            API.sendChat('Tienes que ser miembro del staff para hacer eso!');
                        }
                        break;

                    case "lock":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)) {
                            API.moderateLockWaitList(true);
                        } else {
                            API.sendChat('Tienes que ser miembro del staff para hacer eso!');
                        }
                        break;

                    case "lockskip":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)) {
                            API.moderateLockWaitList(true);
                            setTimeout("Funbot.skip();", 100);
                            setTimeout("API.moderateLockWaitList(false);", 700);
                        } else {
                            API.sendChat('Tienes que ser miembro del staff para hacer eso!');
                        }
                        break;

                    case "say":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins) || typeof command[1] === "undefined") {
                            API.sendChat(command[1]);
                        } else {
                            API.sendChat('Tienes que ser miembro del staff para hacer eso!');
                        }
                        break;

                    case "grab":
                    case "snag":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)) {
                            var addsong = ["[user] I am now grabbing current song.", "[user] This song is now mine! :blush:", "[user] Now adding this current music video..."];
                            r = Math.floor(Math.random() * addsong.length);
                            API.sendChat(addsong[r].replace("user", data.un));
                            $(".icon-curate").click();
                            $($(".curate").children(".menu").children().children()[0]).mousedown();
                        } else {
                            API.sendChat('Tienes que ser miembro del staff para hacer eso!');
                        }
                        break;

                    case "woot":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)) {
                            if (typeof command[1] === "undefined") {
                                API.sendChat("Se aproxima un genial ...!");
                                setTimeout(function () {
                                    document.getElementById("woot").click()
                                }, 650);
                            }
                        } else {
                            API.sendChat("Este comando requiere portero +");
                        }
                        break;

                    case "meh":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)) {
                            if (typeof command[1] === "undefined") {
                                API.sendChat("A-B-U-R-R-I-D-O");
                                setTimeout(function () {
                                    document.getElementById("meh").click()
                                }, 650);
                            }
                        } else {
                            API.sendChat("Este comando requiere portero +");
                        }
                        break;

                    case "reload":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)) {
                            API.sendChat("Recargando el script ...");
                            setTimeout(function () {
                                Funbot.unhook();
                            }, 150);
                            setTimeout(function () {
                                Funbot.hook();
                            }, 550);
                        } else {
                            API.sendChat("Este comando requiere portero +");
                        }
                        break;

                    case "help":
                        if (typeof command[1] == "undefined") {
                            API.sendChat("Greetings! Create a playlist and populate it with songs from either YouTube or Soundcloud. Click the 'Join Waitlist' button and wait your turn to play music.");
                            setTimeout(function () {
                                API.sendChat("Ask a mod if you're unsure about your song choice.");
                            }, 650);
                        } else if (command[1].indexOf("@") > -1) {
                            API.sendChat(command[1] + "Greetings! Create a playlist and populate it with songs from either YouTube or Soundcloud. Click the 'Join Waitlist' button and wait your turn to play music.");
                            setTimeout(function () {
                                API.sendChat("Ask a mod if you're unsure about your song choice.");
                            }, 650);
                        }
                        if (API.getUsers(data.un, Funbot.admins) || API.getUsers(data.un, PlugMod)) {
                            Funbot.misc.ready = false;
                            setTimeout(function () { Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;

                    case "author":
                    case "authors":
                    case "creator":
                        if (Funbot.admins.indexOf(fromID) !== -1 || API.getUsers(data.un, PlugMod)) {
                            API.sendChat("This bot was created by: ๖ۣۜĐل - ɴᴇᴏɴ - TFL, And it's Copyrighted!");
                        }
                        break;

                    case "beggerfilter":
                    case "bf":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)) Funbot.settings.beggerFilter ? API.sendChat("Begger filter is enabled") : API.sendChat("Begger filter is disabled");
                        botMethods.save();
                        break;

                    case "commandfilter":
                    case "cf":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)) Funbot.settings.commandFilter ? API.sendChat("Commands filter is enabled") : API.sendChat("Commands filter is disabled");
                        botMethods.save();
                        break;

                    case "tbf":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)) {
                            if (Funbot.settings.beggerFilter) {
                                Funbot.settings.beggerFilter = false;
                                API.sendChat("Bot will no longer filter fan begging.");
                            } else {
                                Funbot.settings.beggerFilter = true;
                                API.sendChat("Bot will now filter fan begging.");
                            }
                        }
                        break;

                    case "tcf":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)) {
                            if (Funbot.settings.commandFilter) {
                                Funbot.settings.commandFilter = false;
                                API.sendChat("Bot will no longer filter commands.");
                            } else {
                                Funbot.settings.commandFilter = true;
                                API.sendChat("Bot will now filter commands.");
                            }
                        }
                        break;

                    case "songLimit":
                               if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                               if(typeof command[1] == "undefined"){
                               API.sendChat("Necesito un numero, genio.");
                               }else if(isFinite(String(command[1]))){
                               API.sendChat("Limite de tiempo actualizado " + command[1]);
                               Funbot.settings.songLimit = command[1];
                                  }
                               }
                               break;

                    case "status":
                        if (API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)) {
                            var response = "";
                            var currentTime = new Date().getTime();
                            var minutes = Math.floor((currentTime - joined) / 60000);
                            var hours = 0;
                            while (minutes > 60) {
                                minutes = minutes - 60;
                                hours++;
                            }
                            hours == 0 ? response = "Activo desde hace " + minutes + "m " : response = "Activo desde hace " + hours + "h " + minutes + "m";
                            response = response + " | Filtro de groserias: " + Funbot.settings.beggerFilter;
                            response = response + " | filtro de historial: " + Funbot.settings.historyFilter;
                            response = response + " | Filtro de comandos: " + Funbot.settings.commandFilter;
                            response = response + " | Limite de tiempo: " + Funbot.settings.songLimit + "m";
                            response = response + " | Enfriamiento: " + Funbot.settings.cooldown + "s";
                            response = response + " | Filtro de CPU: " + Funbot.settings.removedFilter;
                            API.sendChat(response);
                        } else {
                            API.sendChat("Este comando requiere portero +");
                        }
                        break;
                }
            }
        }
    });

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
	        responses = ['@{beggar}, Asking for fans isn\'t allowed in here, You\'re now being banned for 1hr!', 'Next time read our lobby\'s rule @{beggar}, Asking for fans isn\'t allowed! ಠ_ಠ', '@{beggar}, You\'re now banned for one hour. Asking for fans isn\'t allowed! ಠ_ಠ'],
	        randomInt = Math.floor(Math.random() * responses.length);
        if (msg.match(new RegExp(Funbot.filters.beggerWords.join('|'), 'gi')) && Funbot.settings.beggerFilter)
            return API.moderateDeleteChat(chatID),
	    	API.sendChat(responses[randomInt].replace(/\{beggar\}/gi, data.un)),
	    	setTimeout(function () {
	    	    API.moderateBanUser(fromID, 'h');
	    	}, 1500), false;
        if (msg.split(' ')[0].match(new RegExp(Funbot.filters.commandWords.join('|'), 'gi')))
            return API.moderateDeleteChat(chatID), true;
    });

    API.on(API.CHAT, function (data) { // Chat Function #3
        msg = data.message.toLowerCase().replace(/&colon;/g, ':'),
	        chatID = data.cid,
	        fromID = data.uid,
	        userfrom = data.un;
        /* Match Arrays */
        var inputMatches = [
        	[':eyeroll:', ':notamused:', ':yuno:'], // "Misc" Messages
        	['hello bot', 'bot hello', 'hi bot', 'bot hi', 'sup bot', 'bot sup', 'hey bot', 'bot hey', 'howdy bot', 'bot howdy', 'aye bot', 'yo bot', 'waddup bot', 'bot waddup'], // "Hello" Messages
        	['how are you bot', 'bot how are you', 'hru bot', 'bot hru', 'doing good bot?', 'bot doing good?', 'hows it going bot', 'bot how is it going', 'how you doing bot', 'bot how you doing'], // "Hru" Messages
        	['ty bot', 'bot ty', 'thank you bot', 'bot thank you', 'thanks bot', 'bot thanks', 'thx bot', 'bot thx', 'thanks for asking bot', 'bot thanks for asking', 'thx for asking bot', 'bot thx for asking'], // "TY" Messages
        	['ily bot', 'bot ily', 'i love you bot', 'bot i love you', 'i luv you bot', 'bot i luv you', 'i luv u bot', 'bot i luv u', 'i luv you bot', 'i love you more bot', 'bot love you', 'love you bot'], // "Love" Messages
        	['fuck you bot', 'bot fuck you', 'f u bot', 'bot f u', 'fuhk yuh bot', 'bot fuhk you'], // "Fuck" Messages
        	['bot shut up', 'shut up bot', 'stfu bot', 'bot stfu', 'hush bot', 'bot hush', 'hush it bot', 'bot hush it', 'be quiet bot', 'bot be quiet', 'shut the hell up bot', 'bot shut the hell up'], // "stfu" Messages
        	['i got to go', 'igtg', 'gtg', 'be back', 'going off', 'off to', 'have to go', 'bye bot', 'bot bye'] // "Afk" Messages
        ];
        var outputMessages = [
			['/me ¬_¬', '/me ಠ_ಠ', '/me ლ(ಥ益ಥლ'], // "Misc" Messages
			['Hey!', 'Oh hey there!', 'Good day sir!', 'Hi', 'Howdy!', 'Waddup!'], // Hello Messages
			['I\'m good thanks for asking :)', 'Doing great yo and yourself?', 'All Good Mate!', 'I\'m good thanks for asking!', 'Yeee i\'m cool and youself yo?'], // "Hru" Messages
			["You're welcome! :D", "Your always welcome bro!", "No prob man.."], // "TY" Messages
			['Fuck yeahh!! :D I love you too baby!', 'I love you too ;).....   Sex?... JK you don\'t want this big thing ;)', 'I love you too o.0', 'Sweet.. Love you to ;)'], // "Love" Messages
			['Nah.. I don\'t need another fuck after giving your mom one last night.', '</input fuck> Jk... Fuck you too', '< Test fuck >.. Sorry 0% fucks were given by me.'], // "Fuck" Messages
			['<Test/ShutUp ... Nope', 'Eat this http://i.imgur.com/CSq5xkH.gif', 'No you shut up!', 'But i was made to talk.. :(', 'Just because i am a bot doesn\'t mean you have to tell me to shut up. Why don\'t you shut up!', 'Hey idiot! Ever heard of pressing the "Ignore button"?'], // "stfu" messages
			['See ya man!', 'Awww, See ya babe.', 'Glad you came by thanks! :kissing_heart:', 'Thanks for coming. Hope to see you soon! :blue_heart:'] // "Afk" Messages
        ];
        function sendMessage(text, cooldown) {
            API.sendChat(((text.split(' ')[0] === '/me') ? '@' + userfrom + ' ' : '') + text);
            Funbot.misc.ready = false;
            if (cooldown)
                setTimeout(function () {
                    Funbot.misc.ready = true;
                }, (Funbot.settings.cooldown * 1000));
        }
        if (API.getUsers(userfrom, PlugMod) || API.getUsers(userfrom, PlugMod) || API.getUsers(userfrom, Funbot.admins)) {
            for (var i = 0; i < inputMatches[0].length; i++)
                if (msg.match(inputMatches[0][i]))
                    sendMessage(outputMessages[0][i], false);
            for (var i = 1; i < inputMatches.length; i++)
                for (var x = 0; x < inputMatches[i].length; x++)
                    if (msg.match(inputMatches[i][x]))
                        return sendMessage(outputMessages[x][Math.floor(Math.random() * outputMessages[x].length)], true);
        }
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

    API.sendChat('Bot version ' + Funbot.misc.version + ' Activated!');
} else {
    alert("This bot can only function at http://plug.dj/community");
};
