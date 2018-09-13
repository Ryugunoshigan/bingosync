bingoGenerator = require("./generators/generator_bases/isaac_generator.js");

var bingoList = [];

var easyChallenges = [
  { name: "Bomb 5 shopkeepers", types: ["bombShopkeepers"] },
  { name: "Kill Pin or Larry", types: ["killBossBasement"] },
  { name: "Kill Little Horn", types: ["killBossBasement"] },
  { name: "Kill Duke of Flies", types: ["killBossBasement"] },
  { name: "Get 3 different tarot cards", types: ["getCards"] },
  { name: "Get a syringe item", types: ["syringe"] },
  { name: "Get 6 heart containers", types: ["getHeartContainers"] },
  { name: "Buy everything in a shop", types: ["buyShop"] },
  { name: "Kill a green champion enemy or boss", types: ["killChampion"] },
  { name: "20 bombs", types: ["getPickups"] },
  { name: "15 keys", types: ["getPickups"] },
  { name: "30 coins", types: ["getPickups"] },
  { name: "Use 3 different pills", types: ["getPills"] },
  { name: "Get an orbital", types: ["getOrbital"] },
  { name: "Teleport out of a Boss Room", types: ["teleport"] },
  { name: "Make something happen in a sacrifice room (except coins and You feel blessed)", types: ["sacrifice"] },
  { name: "Kill an enemy with a troll bomb", types: ["killEnemyBomb"] },
  { name: "Break 3 tinted rocks without using bombs", types: ["tintedRocks"] },
  { name: "Bomb a normal beggar", types: ["bombBeggar"] },
  { name: "Enter 2 super secret rooms", types: ["secretRooms"] },
  { name: "Enter 3 secret rooms", types: ["secretRooms"] },
  { name: "Get an eye item", types: ["eye"] },
  { name: "Get a tear rate of 5", types: ["tearRate"] },
  { name: "Give 10 coins to a donation machine", types: ["donationMachine"] },
  { name: "Satisfy a slot machine", types: ["slotMachine"] },
  { name: "Satisfy a blood machine", types: ["bloodMachine"] },
  { name: "Enter a god room", types: ["godRoom"] },
  { name: "Get an item with Head in its name", types: ["head"] },
  { name: "Use 2 books", types: ["books"] },
  { name: "Get a golden key", types: ["goldenPickups"] },
  { name: "Find a Dice room and use it", types: ["diceRoom"] },
  { name: "Use 20 coins in an Arcade Room", types: ["arcadeRoom", "donationMachine","slotMachine","beggar","shellGame"] },
  { name: "Destroy a black poop", types: ["poops"] },
  { name: "Poison an enemy", types: ["effectsOnEnemies"] },
  { name: "Bomb a demon beggar", types: ["bombBeggar"] },
  { name: "Get a Hierophant card or a Balls of Steel pill", types: ["getCards","getPills"] },
  { name: "Get a poker card (Ace of */ 2 of */Joker)", types: ["getCards"] },
  { name: "Get a map", types: ["map"] },
  { name: "Die at exactly 4 minutes and 20 seconds", types: ["suicide"] },
  { name: "Beat a full Fistula, Terratoma or Envy", types: ["sins","killBossCaves"] },
  { name: "Enter a devil room AND an angel room", types: ["devilRoom","godRoom"] },
  { name: "Break a restock box without making profit of it", types: ["restockBox"] },
  { name: "Get an item that does not make you shoot tears (lasers, bombs...)", types: ["tearModifier"] },
  { name: "15 cents in coins on the floor of a single room", types: ["getPickupsOnTheFloor"] },
  { name: "Kill 2 Sin bosses", types: ["sins"] },
  { name: "Get 2 Mom items", types: ["yesMother"] },
  { name: "Pickup any Mushroom item", types: ["mushrooms"] },
  { name: "Get multishot (20/20, Inner Eye, Mutant Spider...)", types: ["multishot"] },
  { name: "50 pickups (combined)", types: ["getPickups"] },
  { name: "Satisfy a normal beggar", types: ["beggar"] },
  { name: "Kill a boss without using your tears", types: ["withoutTears"] },
  { name: "Enter a room locked twice", types: ["bedRoom","books"] },
  { name: "Finish a run with Judas or Azazel", types: ["finishRun"] },
  { name: "Finish a run with Eve or Samson", types: ["finishRun"] },
  { name: "Finish a run with Isaac", types: ["finishRun"] },
  { name: "Kill the Basement 1 boss under 1 minute", types: ["killBossBasement"] },
  { name: "Find an item in a rock, mushroom or tinted rock", types: ["tintedRocks", "mushrooms", "useBombs"] },
  { name: "Complete Basement 1 and 2 without taking damage", types: ["noDamage"] },
  { name: "Get a Luck stat of 3 (at least)", types: ["luck"] },
  { name: "Get 10+ damage stat", types: ["damage"] },
  { name: "Get 2.00 of speed", types: ["speed"] },
  { name: "Bomb yourself 6 times in a single room", types: ["selfDamage"] },
  { name: "Get 25 items", types: ["itemAmount"] },
  { name: "Find a pickup or an item by bombing something", types: ["tintedRocks","mushrooms","skulls", "useBombs"] },
  { name: "Regenerate at least half a heart", types: ["regenerate"] },
  { name: "Kill 2 enemies with a single bomb", types: ["killEnemyBomb"] },
  { name: "Kill 10 champion enemies", types: ["killChampion"] },
  { name: "Use 10 keys in a run", types: ["useKeys"] },
  { name: "Bomb 30 rocks", types: ["useBombs"] },
  { name: "Bomb 3 tinted rocks", types: ["tintedRocks"] },
  { name: "Bomb an angel", types: ["godRoom"] },
  { name: "Take 2 hearts of damage in spikes", types: ["selfDamage"] },
  { name: "Open a Rock Chest", types: ["openChests"] },
  { name: "Hold a worm trinket", types: ["trinkets"] },
  { name: "Hold a penny trinket", types: ["trinkets"] },
  { name: "Hold a Locust trinket", types: ["trinkets"] },
  { name: "Complete Basement 1 with The Lost", types: ["challengeCharacterBasement"] },
  { name: "Complete Basement 1 with Keeper", types: ["challengeCharacterBasement"] },
  { name: "Die on a spider", types: ["suicide"] },
  { name: "Die on a fly", types: ["suicide"] },
  { name: "Exit a challenge room while fighting in it", types: ["teleport", "theChallengeRooms"] },
  { name: "Complete a non-empty room without shooting", types: ["withoutShooting"] },
  { name: "Get a HP up item", types: ["getStatItem"] },
  { name: "Get a Speed up item", types: ["getStatItem"] },
  { name: "Full clear Basement 1+2", types: ["fullClearBasement"] },
  { name: "Reroll 3 times the same thing", types: ["restockBox", "reroll"] },
  { name: "Take 3 batteries", types: ["getBatteries"] },
  { name: "Lose 2 hearts by walking on creep", types: ["selfDamage"] },
  { name: "Trigger the Necronomicon effect 3 times", types: ["selfDamage"] },
  { name: "Collect 1 eternal heart", types: ["getHearts"] },
  { name: "Get 2 familiars", types: ["getFamiliar"] },
  { name: "10 blue flies around you", types: ["getBlueFamiliars"] },
  { name: "5 blue spiders around you", types: ["getBlueFamiliars"] },
  { name: "Stomp 2 enemies", types: ["stomp"] },
  { name: "Kill a Black ball", types: ["killEnemy"] },
  { name: "Get hurt by a red beam", types: ["selfDamage"] },
  { name: "Refill your life by 3 red hearts in the same room", types: ["getHearts"] },
  { name: "Kill 5 enemies while at half a HP", types: ["halfHP"] },
  { name: "Become invincible once", types: ["invincivility"] },
];

bingoList[1] = easyChallenges;



var mediumChallenges = [
  { name: "Get 99 bombs, 99 keys or 99 coins", types: ["getPickups"] },
  { name: "Get 20+ of each pick-up", types: ["getPickups"] },
  { name: "Get an item that grants fly", types: ["flightItem"] },
  { name: "Full clear + no damage in a whole floor (except Basement 1/2)", types: ["fullClear","noDamage"] },
  { name: "Enter a super secret room in a XL floor", types: ["secretRooms"] },
  { name: "Reveal a secret room without using your active or bombs", types: ["secretRooms"] },
  { name: "Get the Guppy transformation", types: ["transformation", "guppy"] },
  { name: "Get Skatole", types: ["shellGame"] },
  { name: "Get 4 different types of hearts in your health bar", types: ["getHearts"] },
  { name: "Get 2 size reductions", types: ["size"] },
  { name: "Get two golden keys", types: ["goldenPickups"] },
  { name: "Kill a super or ultra sin mini-boss", types: ["sins"] },
  { name: "Get a heatlh dropper familiar", types: ["getFamiliar"] },
  { name: "Get Piercing tears", types: ["tearModifier"] },
  { name: "Full clear XL floor past basement", types: ["fullClear"] },
  { name: "Kill any boss only with bombs", types: ["killEnemyBomb"] },
  { name: "Use 4 books", types: ["books"] },
  { name: "Get a resurrection", types: ["resurrection"] },
  { name: "Get an item providing invincibility to explosions", types: ["invincibilityExplosions"] },
  { name: "Destroy a golden poop", types: ["poops"] },
  { name: "Destroy a rainbow poop", types: ["poops"] },
  { name: "Destroy 3 special poops (not the red ones)", types: ["poops"] },
  { name: "Use 3 time modifier pills", types: ["getPills"] },
  { name: "Finish a run with the seed L0ST", types: ["seeds"] },
  { name: "Finish a run with the seed CHAM P10N", types: ["seeds"] },
  { name: "Bomb 3 beggars of the same time", types: ["bombBeggar"] },
  { name: "Bomb a key beggar", types: ["bombBeggar"] },
  { name: "Get the Yes Mother ? transformation", types: ["transformation", "yesMother"] },
  { name: "Finish a run with the seed FART SNDS", types: ["seeds"] },
  { name: "Enter a challenge room and complete it with half your red hearts or less", types: ["theChallengeRooms"] },
  { name: "Enter and clear a Boss-Challenge room with half a heart", types: ["halfHP"] },
  { name: "Have exactly 69 coins, 4 bombs, 20 keys", types: ["getPickups"] },
  { name: "Find a rope ladder trapdoor", types: ["ropeLadderTrapdoor"] },
  { name: "Get a lv2 Bandage Girl", types: ["harbingers"] },
  { name: "Get a lv2 Meat Boy", types: ["harbingers"] },
  { name: "Bomb 8 shopkeepers", types: ["bombShopkeepers"] },
  { name: "Kill Peep", types: ["killBossCaves"] },
  { name: "Kill a Gurdy", types: ["killBossCaves"] },
  { name: "Kill Polycephalus or The Stain", types: ["killBossCaves"] },
  { name: "Fire a Spectral tear", types: ["tearModifier"] },
  { name: "Get 2 effects on your tears", types: ["tearModifier"] },
  { name: "Fire a homing tear", types: ["tearModifier"] },
  { name: "Use a demon beggar or blood machine without taking damage", types: ["invincibility"] },
  { name: "Gain a heart container with two eternal hearts", types: ["getHearts"] },
  { name: "Shoot a beam or laser", types: ["tearModifier"] },
  { name: "Finish a run with Lilith or Magdalene", types: ["finishRun"] },
  { name: "Finish a run with Apollyon or Lazarus", types: ["finishRun"] },
  { name: "Finish a run with Eden or Cain", types: ["finishRun"] },
  { name: "Bomb yourself 8 times in a single room", types: ["selfDamage"] },
  { name: "Enter the Void", types: ["enterFloor"] },
  { name: "Get 30 items", types: ["itemAmount"] },
  { name: "Satisfy a donation machine", types: ["donationMachine"] },
  { name: "Bomb 6 tinted rocks", types: ["tintedRocks"] },
  { name: "Get The Small Rock", types: ["tintedRocks"] },
  { name: "Get through Caves 1 and 2 without taking damage", types: ["noDamage"] },
  { name: "Complete a XL floor without taking damage", types: ["noDamage"] },
  { name: "Lose 3 hearts by walking on creep", types: ["selfDamage"] },
  { name: "Collect 2 eternal hearts", types: ["getHearts"] },
  { name: "Collect a gold heart", types: ["goldenPickups"] },
  { name: "Get 3 familiars", types: ["getFamiliar"] },
  { name: "15 blue flies around you", types: ["getBlueFamiliars"] },
  { name: "Charm an enemy", types: ["effectsOnEnemies"] },
  { name: "10 blue spiders around you", types: ["getBlueFamiliars"] },
  { name: "Stomp 5 enemies", types: ["stomp"] },
  { name: "Kill 5 black balls", types: ["killEnemy"] },
  { name: "Lose 3 hearts by red beams", types: ["selfDamage"] },
  { name: "Refill your life by 4 red hearts in the same room", types: ["getHearts"] },
  { name: "Confuse Effect to an enemy", types: ["effectsOnEnemies"] },
  { name: "Complete a non-empty room without moving", types: ["withoutMoving"] },
  { name: "Get a damage down effect", types: ["damage"] },
  { name: "Get a speed down effect", types: ["speed"] },
  { name: "Get a health down effect", types: ["getPills"] },
  { name: "Complete a scarred womb floor", types: ["completeFloor"] },
  { name: "Complete a Danks Depths floor without taking damage", types: ["noDamage"] },
  { name: "Burning basement 1 + burning basement 2 completed (reminder : in the same run)", types: ["completeFloor"] },
  { name: "Enter 3 cursed rooms", types: ["cursedRoom"] },
  { name: "Use 5 keys in the same floor", types: ["useKeys"] },
  { name: "Get 2 Lil items", types: ["lil"] },
  { name: "Use D4 3 times", types: ["reroll"] },
  { name: "Use razor blade 5 times", types: ["selfDamage"] },
  { name: "Use D6 10 times", types: ["reroll"] },
  { name: "Get 3 things by bombing mushrooms", types: ["mushrooms"] },
  { name: "Enter 2 Arcade Rooms", types: ["arcadeRoom"] },
  { name: "Enter 3 sacrifice rooms", types: ["sacrifice"] },
  { name: "Bomb 20 cobwebs on the floor", types: ["useBombs"] },
  { name: "Get 2 slots for space items, trinkets or pills/cards", types: ["twoSlots"] },
  { name: "Use an Emergency Contact card", types: ["getCards"] },
  { name: "Use a Card against humanity", types: ["getCards"] },
  { name: "Use 5 red-back cards", types: ["getCards"] },
  { name: "Kill Mom's foot with your character's basic damage stat", types: ["damage"] },
  { name: "Get a Devil deal item giving blue or black hearts", types: ["devilRoom"] },
  { name: "Get 3 HP up items", types: ["getStatItem"] },
  { name: "Get a Mushroom item by bombing mushrooms", types: ["mushrooms"] },
  { name: "Complete a Double Trouble Boss room", types: ["doubleTrouble"] },
  { name: "Finish the Boss Rush before 20 minutes", types: ["beatBossRush"] },
];

bingoList[2] = mediumChallenges;


var hardChallenges = [
  { name: "Get the Spun transformation", types: ["transformation", "syringe"] },
  { name: "Get more than 25 damage", types: ["damage"] },
  { name: "Give 10 hearts in sacrifice rooms and beat Isaac", types: ["sacrifice", "selfDamage", "beatIsaac"] },
  { name: "Kill 4 angels", types: ["godRoom"] },
  { name: "Use 8 different pills", types: ["getPills"] },
  { name: "Beat Boss Rush and The Hush", types: ["beatBossRush","beatTheHush"] },
  { name: "Don't take any pedestal item in Basement 1 and 2 and beat Satan", types: ["beatSatan","noPedestal"] },
  { name: "Beat It Lives without taking any Treasure room item", types: ["beatItLives", "noTreasureRooms"] },
  { name: "Enter all secret and supersecret rooms from Basement 1 to Womb 2", types: ["secretRooms"] },
  { name: "Get the Leviathan transformation", types: ["transformation","devilRoom"] },
  { name: "Get the Seraphim transformation", types: ["transformation","godRoom"] },
  { name: "Use Lemon Party pill or Lemon Mishap on Isaac", types: ["getPills"] },
  { name: "Kill Isaac with half a heart during the whole fight", types: ["halfHP","beatIsaac"] },
  { name: "Accept every devil deal the game proposes you and beat It Lives", types: ["devilRoom","beatItLives"] },
  { name: "Full clear Cathedral", types: ["fullClearlv7"] },
  { name: "Full clear Sheol", types: ["fullClearlv7"] },
  { name: "Full clear The Chest", types: ["fullClearlv8"] },
  { name: "Full clear Dark Room", types: ["fullClearlv8"] },
  { name: "Get 4 Guppy items", types: ["guppy"] },
  { name: "Kill Satan without gaining any heart container during the run", types: ["beatSatan","noHPup"] },
  { name: "Kill It Lives with a bomb", types: ["killEnemyBomb","beatItLives"] },
  { name: "Kill It Lives without opening any chests during the run", types: ["noChests","beatItLives"] },
  { name: "Beat Isaac without buying anything from shops", types: ["beatIsaac","noShops"] },
  { name: "Beat Blue Baby", types: ["beatBlueBaby"] },
  { name: "Beat The Lamb", types: ["beatTheLamb"] },
  { name: "Beat It Lives without using active item during the run", types: ["beatItLives","noActive"] },
  { name: "Beat any boss only by pressing moving arrows", types: ["withoutShooting"] },
  { name: "Satisfy 2 demon beggars and then beat It Lives", types: ["beatItlives","beggar"] },
  { name: "Enter I AM ERROR room", types: ["iAmErrorRoom"] },
  { name: "Finish a run with the seed 1CES KATE", types: ["seeds"] },
  { name: "Get a golden bomb", types: ["goldenPickups"] },
  { name: "Finish a run in less than 40 minutes in Dark Room or The Chest", types: ["finishRun"] },
  { name: "Use 6 books items", types: ["books"] },
  { name: "Kill Little horn with one of his own bombs", types: ["killEnemyBomb","killBoss"] },
  { name: "Finish a run with the seed 1MN0 B0DY", types: ["seeds"] },
  { name: "Use Suicide King card", types: ["getCards"] },
  { name: "Sleep in a bed", types: ["bedRoom"] },
  { name: "Find a black market", types: ["ropeLadderTrapdoor"] },
  { name: "Get a lv3 Meat Boy", types: ["harbingers"] },
  { name: "Get a lv3 Bandage Girl", types: ["harbingers"] },
  { name: "Bomb 10 shopkeepers", types: ["bombShopkeepers"] },
  { name: "Bomb a bomb beggar", types: ["bombBeggar"] },
  { name: "Take no devil deals and no items in angel rooms and beat Isaac or Satan", types: ["beatIsaac","beatSatan","noDevilDeals"] },
  { name: "Enter a boss Room (not in Basement) with half a heart and complete it", types: ["halfHP"] },
  { name: "Finish a run with ??? or Keeper", types: ["finishRun"] },
  { name: "Bomb yourself 10 times in a single room", types: ["selfDamage"] },
  { name: "Beat Delirium", types: ["beatDelirium"] },
  { name: "Get 35 items", types: ["itemAmount"] },
  { name: "Take no damage until killing Mom's foot", types: ["noDamage"] },
  { name: "Kill It Lives without having opened any chest", types: ["beatItLives","noChests"] },
];

bingoList[3] = hardChallenges;


extraHardChallenges = [
  { name: "Kill the Bloat in a Boss room without taking damage", types: ["noDamage"] },
  { name: "Kill It Lives, Isaac, ??? and Mega Satan", types: ["beatMegaSatan"] },
  { name: "Full clear The Void", types: ["fullClearVoid","beatDelirium"] },
  { name: "Kill It Lives, Satan, the Lamb and Mega Satan", types: ["beatMegaSatan","finishRun"] },
  { name: "Kill The Hush without taking damage during the fight", types: ["beatTheHush"] },
  { name: "Beat It Lives while only taking items in Boss Rooms", types: ["noTreasureRooms","beatItLives"] },
  { name: "Get 12 hearts containers", types: ["getHeartContainers"] },
  { name: "Kill It Lives without ever gaining blue hearts", types: ["noBlueHearts","beatItLives"] },
  { name: "Beat Delirium in less than 40 minutes", types: ["beatDelirium"] },
  { name: "Finish a run with the seed KEEP TRAK", types: ["seeds"] },
  { name: "Finish a run with the seed THEG H0ST", types: ["seeds"] },
  { name: "Get a Super Meat Boy (lv4)", types: ["harbingers"] },
  { name: "Finish a run with The Lost", types: ["finishRun"] },
  { name: "Beat The Lamb after beating Isaac", types: ["beatIsaac","beatTheLamb"] },
  { name: "Beat The Lamb without picking up any bomb during the run", types: ["beatTheLamb","noBombs"] },
  { name: "Beat The Hush without using your coins during the run", types: ["beatTheHush","noCoins"] },
  { name: "Finish a run in less than 25 minutes", types: ["finishRun"] },
  { name: "Kill The Hush without using keys or coins in Blue Womb", types: ["beatTheHush","noCoins","noKeys"] },
  { name: "Kill ??? without shooting", types: ["beatBlueBaby", "withoutShooting"] },
  { name: "Kill Delirium with a bomb", types: ["beatDelirium","killEnemyBomb"] },
];

bingoList[4] = extraHardChallenges;

//TYPES
//bombShopkeepers, killBossBasement, getCards, syringe, getHeartContainers, buyShop, killChampion, getPickups, getPills, getOrbital,
//teleport, sacrifice, killEnemyBomb, tintedRocks, bombBeggar, secretRooms, eye, tearRate, donationMachine, slotMachine, bloodMachine,
//godRoom, head, books, goldenPickups, diceRoom, arcadeRoom, beggar, shellGame, poops, effectsOnEnemies, map, suicide, sins,
//killBossCaves, devilRoom, restockBox, tearModifier, getPickupsOnTheFloor, yesMother, mushrooms, multishot, withoutTears, bedRoom,
//finishRun, useBombs, noDamage, luck, damage, speed, selfDamage, itemAmount, skulls, regenerate, useKeys, openChests, trinkets,
//challengeCharacterBasement, theChallengeRooms, withoutShooting, getStatItem, fullClearBasement, reroll, getBatteries, getFamiliar,
//getBlueFamiliars, stomp, killEnemy, halfHP, invincibility, getHearts, flightItem, fullClear, transformation, guppy, size,
//resurrection, invincibilityExplosions, ropeLadderTrapdoor, harbingers, enterFloor, withoutMoving, completeFloor, curseRoom
//lil, twoSlots, doubleTrouble, beatBossRush, beatIsaac, beatTheHush, beatSatan, noPedestal, beatItLives, noTreasureRooms,
//fullClearlv7, fullClearlv8, noChests, noShops, beatBlueBaby, beatTheLamb, noActive, iAmErrorRoom, seeds, noDevilDeals, beatDelirium,
//beatMegaSatan, fullClearVoid, noBlueHearts, noBombs, noCoins, noKeys,
