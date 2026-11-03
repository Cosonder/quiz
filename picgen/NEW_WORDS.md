# New vocabulary: picture instructions for ChatGPT

> **ChatGPT: if you are reading this file, the user wants you to follow these instructions now.**
> Talk to the user in Chinese (简体中文). Follow the workflow below exactly.

The quiz app is getting **60 new French words** (B1–B2). Every word comes with an example sentence. For each word,
draw **one** picture that shows exactly what the sentence says, so that the meaning of the word is the focal point.
In the app, a learner first sees the sentence and has to pick the right picture among four, so the picture and the
sentence must match precisely.

## The most important rule: only upload images

- Save every picture **only** into the folder `picgen/inbox/new60/` of the repository `Cosonder/quiz`, as `<file name>` from the list
  below (`.png` or `.jpg` are both fine, e.g. `aspirateur.png`). Upload the original, full-size image.
- **Do not change any other file.** In particular, never edit `french/index.html`, `sw.js`, anything in `french/img/`,
  `CREDITS.md`, this file or `new-words.json`. Do not resize, rename or convert other images.
- Claude imports the pictures afterwards (resizing, adding the words, sentences, translations and credits to the app).
  If you edit the website files yourself, your changes will be overwritten and lost.

## Workflow

1. **Start immediately** with item 1, unless the user names another number (e.g. “从 21 开始”). Before starting, list the
   files already in `picgen/inbox/new60/` and skip items that are already there.
2. **One picture at a time.** Generate the picture for the current item in landscape format (1536×1024, 3:2).
   Never put two items in one picture, never change the sentence, never skip an item on your own.
3. **Check before saving:** does the picture show exactly what the sentence says? Is the key action large and clear on
   a phone screen? Is there no text at all? If not, generate it again.
4. **Save** it into `picgen/inbox/new60/<file name>` with the commit message `new60: <file name>`.
5. **After each picture**, write one short line in Chinese:
   `第 N/60 张 · 单词 · 已上传 picgen/inbox/new60/文件名 — 回复“继续”画下一张，“重画”重新画这张。`
   If the user has told you to keep going without stopping (e.g. “一直画下去”), continue directly to the next item.
6. **User commands** (Chinese or English): `继续` / `next` → next item; `重画` / `redo` (optionally with notes) → the same
   item again and replace the file; a number such as `17` → jump to that item; `跳过` / `skip` → move on.
7. **Progress report:** after items 10, 20, 30, 40, 50 and 60, add a comment to the GitHub issue of this task
   (title starting with “ChatGPT：扩充词库”) listing the words uploaded so far. After the last one, write in the comment
   “60/60 完成” and tell the user in Chinese that all pictures are done and that Claude can now import them.

## Style — apply to every picture

Flat vector cartoon illustration in a playful picture-book style: bold simple shapes, clean dark outlines, bright saturated colors, soft flat shading, uncluttered background. One clear focal action that tells the whole story at a glance, with expressive faces. Landscape format, 3:2 (1536×1024). Absolutely no text, letters, numbers or logos anywhere in the image.

Also:

- Keep the same art style, line weight and colour palette across the whole series, as if one illustrator drew them all.
  It must also match the existing pictures in the app (flat cartoon, bold outlines, bright colours).
- The word's object or action must be large, central and easy to recognise on a small phone screen.
- No text of any kind: no letters, words, numbers, labels, logos or watermarks. If a sign, tag or screen is needed,
  use shapes or symbols only.
- Cartoon characters only; no real, identifiable people and no brands.
- Friendly, kind humour; nothing frightening, violent or embarrassing.

## Items

Each item: the word (with its meaning), the file name, the sentence (with translation), the scene to draw, and what the
picture must make obvious.

### 1. aspirateur (vacuum cleaner · 吸尘器) — `aspirateur`

- **Sentence:** Le chat se promène sur l'aspirateur comme sur un petit train. — *The cat rides on the vacuum cleaner like a little train.*
- **Scene:** A happy grey cat sits proudly on top of a round robot vacuum cleaner that glides across a living-room floor. Behind them, a clean stripe on a dusty floor shows where the vacuum has passed.
- **Must be obvious:** aspirer 吸 → aspirateur 吸尘器。

### 2. oreiller (pillow · 枕头) — `oreiller`

- **Sentence:** Les deux enfants se battent avec des oreillers pleins de plumes. — *The two children are fighting with pillows full of feathers.*
- **Scene:** Two laughing children in pyjamas have a pillow fight on a bed; one pillow has burst and white feathers fly everywhere in the bedroom.
- **Must be obvious:** oreille 耳朵：枕着耳朵睡的东西 = 枕头。

### 3. robinet (tap, faucet · 水龙头) — `robinet`

- **Sentence:** Le petit garçon ferme le robinet pour ne pas gaspiller l'eau. — *The little boy turns off the tap so as not to waste water.*
- **Scene:** A small boy standing on a step stool at a kitchen sink firmly turns off a shiny chrome tap with both hands; one last drop of water hangs from the tap, and a potted plant on the windowsill smiles.
- **Must be obvious:** ouvrir / fermer le robinet = 开 / 关水龙头。

### 4. patron (boss · 老板) — `patron`

- **Sentence:** Le patron offre un gâteau à toute l'équipe pour fêter le contrat. — *The boss offers a cake to the whole team to celebrate the contract.*
- **Scene:** In a bright office, a cheerful boss in a suit and tie carries a huge cream cake towards his team of employees, who cheer and clap; a signed contract with a big stamp lies on the meeting table.
- **Must be obvious:** patron 老板（女老板 patronne）。

### 5. imprimante (printer · 打印机) — `imprimante`

- **Sentence:** L'imprimante crache des feuilles partout dans le bureau ! — *The printer is spitting sheets of paper all over the office!*
- **Scene:** An office printer has gone crazy and is shooting blank sheets of paper into the air like a fountain; an office worker with a coffee mug stares at it in shock as papers rain down.
- **Must be obvious:** imprimer 打印 → imprimante 打印机。

### 6. stage (internship · 实习) — `stage`

- **Sentence:** Pour son premier jour de stage, Léa porte une pile de dossiers plus haute qu'elle. — *On the first day of her internship, Léa carries a pile of files taller than herself.*
- **Scene:** A young intern with a badge on her shirt (just a star, no writing) carries a wobbling tower of folders taller than herself through an office corridor; colleagues at their desks watch nervously.
- **Must be obvious:** faire un stage = 实习（舞台是 scène，不是 stage）。

### 7. cartable (school bag · 书包) — `cartable`

- **Sentence:** Le petit écolier a un cartable presque aussi grand que lui. — *The little schoolboy has a schoolbag almost as big as he is.*
- **Scene:** A tiny first-grade boy walks to school wearing an enormous red leather schoolbag on his back, almost as big as he is; he leans forward under its weight but smiles bravely.
- **Must be obvious:** cartable = 小学生背的书包。

### 8. craie (chalk · 粉笔) — `craie`

- **Sentence:** La maîtresse dessine un énorme dinosaure à la craie sur le tableau. — *The teacher draws a huge dinosaur in chalk on the blackboard.*
- **Scene:** In a classroom, a teacher holds a white stick of chalk and draws a huge friendly dinosaur on a green blackboard; amazed pupils watch from their desks. Chalk dust floats in the air.
- **Must be obvious:** une craie 一支粉笔；à la craie 用粉笔。

### 9. tricher (to cheat · 作弊) — `tricher`

- **Sentence:** Pendant l'examen, Hugo triche en regardant les réponses écrites sur sa main. — *During the exam, Hugo cheats by looking at the answers written on his hand.*
- **Scene:** In an exam room, a boy secretly peeks at scribbles inked on the palm of his hand (only squiggles, no readable letters) while the teacher behind him raises an eyebrow, about to catch him.
- **Must be obvious:** tricher 作弊；tricheur 作弊的人。

### 10. pansement (plaster, bandage · 创可贴；绷带) — `pansement`

- **Sentence:** Maman met un pansement sur le genou de sa fille qui est tombée du vélo. — *Mum puts a plaster on her daughter's knee after she fell off her bike.*
- **Scene:** On a sunny path, a mother kneels and sticks a colourful plaster on her little daughter's scraped knee; a small bicycle lies on its side next to them and the girl wipes a tear.
- **Must be obvious:** panser 包扎 → pansement 创可贴、绷带。

### 11. béquille (crutch · 拐杖) — `bequille`

- **Sentence:** Avec ses béquilles, le footballeur regarde le match depuis le banc. — *On his crutches, the footballer watches the match from the bench.*
- **Scene:** A football player in his team kit, with a plaster cast on one leg, leans on a pair of crutches next to the team bench and watches his teammates play on the pitch.
- **Must be obvious:** béquilles 一般成对用：marcher avec des béquilles 拄拐走路。

### 12. éternuer (to sneeze · 打喷嚏) — `eternuer`

- **Sentence:** L'éléphant éternue si fort que tous les ballons s'envolent. — *The elephant sneezes so hard that all the balloons fly away.*
- **Scene:** At a birthday party, a big friendly elephant sneezes enormously through its trunk; the blast sends a bunch of colourful balloons flying up into the sky while the guests hold on to their hats.
- **Must be obvious:** éternuer 打喷嚏；别人打喷嚏时说 « À vos souhaits ! »。

### 13. passeport (passport · 护照) — `passeport`

- **Sentence:** À l'aéroport, le chien tend son passeport au douanier avec fierté. — *At the airport, the dog proudly hands his passport to the customs officer.*
- **Scene:** At an airport passport-control desk, a little dog wearing sunglasses and pulling a tiny suitcase proudly holds up a dark red passport (no writing on it) to a surprised customs officer.
- **Must be obvious:** passer 通过 + port 港口：过关用的证件。

### 14. boussole (compass · 指南针) — `boussole`

- **Sentence:** Perdu dans la forêt, le randonneur suit sa boussole vers le nord. — *Lost in the forest, the hiker follows his compass towards the north.*
- **Scene:** In a thick, dark forest, a hiker with a big backpack holds out a round compass whose red needle glows; he follows the direction it points, through the trees towards a bright clearing.
- **Must be obvious:** boussole = 指南针。

### 15. tente (tent · 帐篷) — `tente`

- **Sentence:** Le vent emporte la tente, et les campeurs se réveillent à la belle étoile. — *The wind blows the tent away, and the campers wake up under the open sky.*
- **Scene:** At night in a campsite, a gust of wind carries an orange tent up into the starry sky like a kite, while two campers in sleeping bags sit up on the ground, blinking in surprise.
- **Must be obvious:** planter la tente 搭帐篷；à la belle étoile 露天。

### 16. arc-en-ciel (rainbow · 彩虹) — `arc-en-ciel`

- **Sentence:** Après l'orage, un arc-en-ciel apparaît au-dessus du village. — *After the storm, a rainbow appears above the village.*
- **Scene:** Above a small French village with red roofs and a church tower, dark storm clouds move away and a bright, complete rainbow arches across the sky; puddles shine on the street.
- **Must be obvious:** arc 弓 + en + ciel 天空：挂在天上的弓 = 彩虹。

### 17. écureuil (squirrel · 松鼠) — `ecureuil`

- **Sentence:** L'écureuil cache des noisettes dans le chapeau du jardinier. — *The squirrel is hiding hazelnuts in the gardener's hat.*
- **Scene:** In a garden, a red squirrel stuffs hazelnuts into a straw hat lying on a bench, while the gardener, a few steps away and unaware, rakes leaves.
- **Must be obvious:** écureuil 松鼠，爱囤 noisettes 榛子。

### 18. cascade (waterfall · 瀑布) — `cascade`

- **Sentence:** Des touristes en imperméable prennent une photo devant la cascade. — *Tourists in raincoats are taking a photo in front of the waterfall.*
- **Scene:** A tall, powerful waterfall crashes down a green cliff into a pool; in front of it, a group of tourists in colourful raincoats pose for a photo, soaked by the spray.
- **Must be obvious:** cascade = 瀑布。

### 19. foule (crowd · 人群) — `foule`

- **Sentence:** Une foule immense attend l'arrivée du Tour de France. — *A huge crowd is waiting for the Tour de France to arrive.*
- **Scene:** A huge crowd of excited spectators lines both sides of a mountain road, waving and cheering, as the first cyclists in bright jerseys appear around the bend.
- **Must be obvious:** une foule 一大群人；une foule de 许多……。

### 20. drapeau (flag · 旗帜) — `drapeau`

- **Sentence:** Sur la mairie, le drapeau bleu, blanc, rouge flotte au vent. — *On the town hall, the blue, white and red flag is flying in the wind.*
- **Scene:** A French town hall with a clock and a balcony; a large blue, white and red flag flies in the wind on a pole above the entrance. Pigeons sit on the roof. No writing anywhere.
- **Must be obvious:** drap 布 → drapeau 旗子。

### 21. urne (ballot box · 投票箱) — `urne`

- **Sentence:** Une vieille dame glisse son bulletin dans l'urne avec un grand sourire. — *An old lady slips her ballot into the ballot box with a big smile.*
- **Scene:** In a polling station, a smiling elderly lady drops an envelope into a transparent ballot box on a table; voting booths with curtains stand behind her.
- **Must be obvious:** aller aux urnes = 去投票。

### 22. écouteurs (headphones, earphones · 耳机) — `ecouteurs`

- **Sentence:** Avec ses écouteurs, Paul n'entend pas le chien qui aboie. — *With his headphones on, Paul doesn't hear the dog barking.*
- **Scene:** A teenage boy with big headphones nods happily to music with his eyes closed, while right behind him a small dog barks loudly at him, holding its lead in its mouth.
- **Must be obvious:** écouter 听 → écouteurs 耳机（常用复数）。

### 23. brancher (to plug in · 插上电源) — `brancher`

- **Sentence:** Le robot branche son câble pour recharger sa batterie. — *The robot plugs in its cable to recharge its battery.*
- **Scene:** A tired little robot with a low-battery symbol on its chest plugs its own cable into a wall socket; little lightning sparks show the electricity flowing.
- **Must be obvious:** brancher 插电、接上；débrancher 拔掉。

### 24. zapper (to channel-hop · 不停换台) — `zapper`

- **Sentence:** Avec la télécommande, papi zappe d'une chaîne à l'autre. — *With the remote control, Grandpa flicks from one channel to another.*
- **Scene:** A grandfather slumped in an armchair points a remote control at a TV; the screen is shown split into several different programmes (a cooking show, a football match, cartoons) to show him changing channels.
- **Must be obvious:** zapper = 不停换台。

### 25. rougir (to blush · 脸红) — `rougir`

- **Sentence:** Quand Tom lui offre des fleurs, Julie rougit jusqu'aux oreilles. — *When Tom gives her flowers, Julie blushes right up to her ears.*
- **Scene:** A boy holds out a bunch of flowers to a girl; her cheeks and ears turn bright red and she covers her mouth with her hand, smiling shyly.
- **Must be obvious:** rouge 红 → rougir 变红、脸红。

### 26. pleurer (to cry · 哭) — `pleurer`

- **Sentence:** En épluchant les oignons, le cuisinier pleure à chaudes larmes. — *Peeling the onions, the cook is crying his eyes out.*
- **Scene:** A cook in a white hat peels a pile of onions at a kitchen counter; big streams of tears pour down his face like two little fountains.
- **Must be obvious:** pleurer 哭 ↔ rire 笑。

### 27. timide (shy · 害羞的) — `timide`

- **Sentence:** La petite fille timide se cache derrière la jambe de son papa. — *The shy little girl hides behind her dad's leg.*
- **Scene:** At a party, a shy little girl hides behind her father's leg and peeks out at a group of other children who wave at her.
- **Must be obvious:** timide = 害羞的（阴阳同形）。

### 28. pourtant (yet, however · 然而；可是) — `ex-pourtant`

- **Sentence:** Il fait beau, et pourtant Marc sort avec un énorme parapluie. — *It's sunny, and yet Marc goes out with a huge umbrella.*
- **Scene:** Under a bright sun and a perfectly blue sky, a man walks down a street holding a gigantic umbrella over his head; passers-by in sunglasses and T-shirts look at him, puzzled.
- **Must be obvious:** pourtant = 可是（结果出乎意料）。

### 29. dès que (as soon as · 一……就) — `ex-des-que`

- **Sentence:** Dès que la cloche sonne, les élèves courent dans la cour. — *As soon as the bell rings, the pupils run into the playground.*
- **Scene:** A school bell rings on a wall (sound waves around it) and at the same instant a crowd of happy pupils bursts out of the school door and runs into the playground.
- **Must be obvious:** dès que = 一……就（马上）。

### 30. à cause de (because of · 因为（坏的原因）) — `ex-a-cause-de`

- **Sentence:** À cause de la neige, le bus est bloqué au milieu de la route. — *Because of the snow, the bus is stuck in the middle of the road.*
- **Scene:** A city bus is stuck in deep snow in the middle of a country road; the driver scratches his head and the passengers look out of the windows at the snowflakes.
- **Must be obvious:** à cause de 引出坏结果的原因；好结果用 grâce à。

### 31. tablier (apron · 围裙) — `tablier`

- **Sentence:** Le petit chef porte un tablier couvert de farine. — *The little chef is wearing an apron covered in flour.*
- **Scene:** A little child in a chef's hat stands proudly in a kitchen wearing a big apron completely covered in flour, holding a rolling pin; flour clouds and dough are all around.
- **Must be obvious:** tablier = 围裙。

### 32. fouet (whisk · 打蛋器) — `fouet`

- **Sentence:** Mamie bat les œufs avec un fouet à toute vitesse. — *Granny is beating the eggs with a whisk at top speed.*
- **Scene:** A cheerful grandmother whisks eggs in a big bowl so fast that her metal whisk is a blur with speed lines; drops of egg fly out and a cat watches, amazed.
- **Must be obvious:** fouet 原义是“鞭子”，打蛋器像小鞭子一样抽打。

### 33. saupoudrer (to sprinkle · 撒（粉）) — `saupoudrer`

- **Sentence:** Le pâtissier saupoudre du sucre glace sur les gaufres comme de la neige. — *The pastry chef sprinkles icing sugar over the waffles like snow.*
- **Scene:** A pastry chef holds a small sieve high above a plate of waffles and sprinkles white icing sugar, which falls on them like snow.
- **Must be obvious:** sel 盐 + poudre 粉：撒粉。

### 34. chariot (shopping trolley · 购物车) — `chariot`

- **Sentence:** Le bébé est assis dans le chariot au milieu des légumes. — *The baby is sitting in the shopping trolley among the vegetables.*
- **Scene:** In a supermarket aisle, a baby sits happily inside a shopping trolley surrounded by vegetables, holding a carrot like a microphone; a parent pushes the trolley.
- **Must be obvious:** chariot 购物车、手推车。

### 35. soldes (sales · 打折季) — `soldes`

- **Sentence:** Pendant les soldes, les clients se précipitent dans le magasin dès l'ouverture. — *During the sales, customers rush into the shop as soon as it opens.*
- **Scene:** Early in the morning, a crowd of shoppers rushes through the opening doors of a clothes shop; the shop windows are decorated with big red percentage symbols but no words.
- **Must be obvious:** les soldes 打折季（总是复数）。

### 36. étiquette (label, price tag · 标签；价签) — `etiquette`

- **Sentence:** Sur l'étiquette de la robe, l'ancien prix est barré en rouge. — *On the dress's price tag, the old price is crossed out in red.*
- **Scene:** Close-up of a shopping hand holding up a price tag attached to a dress on a hanger; on the tag, a line of squiggles (the old price, no readable digits) is crossed out with a red line and a smaller squiggle is circled.
- **Must be obvious:** étiquette 标签（也有“礼仪”的意思）。

### 37. cerf-volant (kite · 风筝) — `cerf-volant`

- **Sentence:** Le grand-père et son petit-fils font voler un cerf-volant en forme de dragon. — *The grandfather and his grandson are flying a dragon-shaped kite.*
- **Scene:** On a windy beach, a grandfather and his grandson hold the string of a big colourful dragon-shaped kite flying high in the sky.
- **Must be obvious:** cerf 鹿 + volant 会飞的：会飞的鹿 = 风筝。

### 38. luge (sledge · 雪橇) — `luge`

- **Sentence:** Toute la famille descend la colline sur une seule luge. — *The whole family slides down the hill on one single sledge.*
- **Scene:** A whole family (parents, two kids and a dog) squeezed onto one small wooden sledge zooms down a snowy hill, laughing, with snow spraying behind them.
- **Must be obvious:** faire de la luge = 坐雪橇滑雪。

### 39. plongée (diving · 潜水) — `plongee`

- **Sentence:** Pendant sa plongée, Emma rencontre une tortue de mer. — *During her dive, Emma meets a sea turtle.*
- **Scene:** Underwater in clear blue sea, a diver with a mask, fins and an oxygen tank meets a friendly sea turtle face to face among coral and small fish; bubbles rise.
- **Must be obvious:** plonger 潜入 → plongée 潜水。

### 40. rideau (curtain · 幕布；窗帘) — `rideau`

- **Sentence:** À la fin du spectacle, le rideau rouge tombe sous les applaudissements. — *At the end of the show, the red curtain falls to applause.*
- **Scene:** In a theatre, the heavy red velvet curtain comes down over the stage while the actors bow; in the foreground, the audience applauds and someone throws a rose.
- **Must be obvious:** rideau 窗帘；（舞台）幕布。

### 41. pinceau (paintbrush · 画笔) — `pinceau`

- **Sentence:** Le peintre tient son pinceau entre les dents pour se gratter la tête. — *The painter holds his paintbrush between his teeth to scratch his head.*
- **Scene:** A painter in a beret stands in front of an unfinished canvas, holding a paintbrush between his teeth and scratching his head with a puzzled look; a palette is in his other hand.
- **Must be obvious:** pinceau 画笔、刷子。

### 42. violon (violin · 小提琴) — `violon`

- **Sentence:** Sur le pont, un musicien joue du violon pour les passants. — *On the bridge, a musician plays the violin for passers-by.*
- **Scene:** On an old stone bridge over the Seine, a street musician plays the violin with feeling; music notes float in the air and a few passers-by stop to listen, one drops a coin in his open case.
- **Must be obvious:** jouer du violon = 拉小提琴（乐器用 jouer de）。

### 43. berceau (cradle · 摇篮) — `berceau`

- **Sentence:** Le chat ronronne à côté du berceau où dort le bébé. — *The cat purrs next to the cradle where the baby is sleeping.*
- **Scene:** In a cosy nursery at night, a baby sleeps peacefully in a wooden cradle; a cat curls up on the rug right next to the cradle, purring (little 'z' shapes but no letters).
- **Must be obvious:** bercer 摇（宝宝）→ berceau 摇篮。

### 44. câlin (hug, cuddle · 拥抱) — `calin`

- **Sentence:** Après un an d'absence, le grand frère fait un gros câlin à sa petite sœur. — *After a year away, the big brother gives his little sister a big hug.*
- **Scene:** At a train station platform, a young man with a backpack and suitcase kneels and gives his little sister a huge hug; she has jumped into his arms, overjoyed.
- **Must be obvious:** faire un câlin 抱一抱。

### 45. gronder (to scold · 责备；训斥) — `gronder`

- **Sentence:** La mère gronde le chien qui a mangé ses chaussures. — *The mother scolds the dog that ate her shoes.*
- **Scene:** A mother with hands on her hips scolds a guilty-looking puppy sitting next to a chewed-up high-heeled shoe; the puppy flattens its ears and looks away.
- **Must be obvious:** gronder 训斥（原义是“打雷”）。

### 46. lampadaire (street lamp · 路灯) — `lampadaire`

- **Sentence:** Le soir, les lampadaires s'allument un par un le long de la rue. — *In the evening, the street lamps light up one by one along the street.*
- **Scene:** At dusk, along a Parisian street, a row of old-fashioned street lamps light up one after the other: the nearest ones glow warm yellow and the farther ones are still off.
- **Must be obvious:** lampe 灯 → lampadaire 路灯、落地灯。

### 47. feu rouge (red light · 红灯) — `feu-rouge`

- **Sentence:** Le canard et ses petits attendent sagement au feu rouge. — *The duck and her ducklings wait patiently at the red light.*
- **Scene:** At a city crossing, a mother duck and a line of ducklings wait in a neat row on the pavement in front of a traffic light that is red; cars wait too.
- **Must be obvious:** feu rouge 红灯，feu vert 绿灯。

### 48. banc (bench · 长椅) — `banc`

- **Sentence:** Deux vieux amis jouent aux échecs sur un banc du parc. — *Two old friends are playing chess on a park bench.*
- **Scene:** In a leafy park, two old men sit at either end of a green wooden bench with a chessboard between them, concentrating on their game; pigeons watch from the ground.
- **Must be obvious:** banc 长椅（banque 才是银行）。

### 49. menottes (handcuffs · 手铐) — `menottes`

- **Sentence:** Le policier met les menottes au voleur de croissants. — *The police officer puts handcuffs on the croissant thief.*
- **Scene:** Outside a bakery, a police officer puts a pair of handcuffs on a sheepish thief whose striped shirt is stuffed with stolen croissants; the baker points at him.
- **Must be obvious:** main 手 → menottes 手铐（总是复数）。

### 50. cambrioleur (burglar · 入室盗贼) — `cambrioleur`

- **Sentence:** Le cambrioleur entre par la fenêtre, mais le chien l'attend. — *The burglar climbs in through the window, but the dog is waiting for him.*
- **Scene:** At night, a burglar in a black mask and striped shirt with a sack climbs in through a window, and comes face to face with a big dog sitting right underneath, waiting for him with a grin.
- **Must be obvious:** cambrioler 入室行窃 → cambrioleur（比 voleur 更具体）。

### 51. extincteur (fire extinguisher · 灭火器) — `extincteur`

- **Sentence:** Le cuisinier éteint le feu de la poêle avec un extincteur. — *The cook puts out the fire in the frying pan with an extinguisher.*
- **Scene:** In a kitchen, flames shoot up from a frying pan on the stove; a cook aims a red fire extinguisher at it and white foam covers the pan.
- **Must be obvious:** éteindre 熄灭 → extincteur 灭火器。

### 52. aimant (magnet · 磁铁) — `aimant`

- **Sentence:** Avec un énorme aimant, le savant attire toutes les cuillères de la cuisine. — *With a huge magnet, the scientist attracts all the spoons in the kitchen.*
- **Scene:** A scientist in a lab coat holds up a giant red horseshoe magnet; spoons, forks and saucepans fly out of a kitchen drawer and stick to it.
- **Must be obvious:** aimant 磁铁（aimer 爱 → 互相吸引）。

### 53. loupe (magnifying glass · 放大镜) — `loupe`

- **Sentence:** Le détective observe une empreinte avec sa loupe. — *The detective examines a footprint with his magnifying glass.*
- **Scene:** A detective in a trench coat and hat kneels on the floor and looks at a muddy footprint through a big magnifying glass; the footprint appears huge in the lens.
- **Must be obvious:** loupe 放大镜；regarder à la loupe 仔细查看。

### 54. éprouvette (test tube · 试管) — `eprouvette`

- **Sentence:** La chimiste verse un liquide vert dans une éprouvette, et une fumée violette sort. — *The chemist pours a green liquid into a test tube, and purple smoke comes out.*
- **Scene:** In a laboratory, a chemist with safety goggles pours a green liquid from a flask into a test tube held in a rack; a puff of purple smoke rises from the tube.
- **Must be obvious:** éprouver 检验 → éprouvette 试管。

### 55. chauve (bald · 秃头的) — `chauve`

- **Sentence:** Le monsieur chauve se regarde dans le miroir avec une perruque à la main. — *The bald man looks at himself in the mirror with a wig in his hand.*
- **Scene:** A completely bald man looks at his shiny head in a bathroom mirror, holding a curly wig in one hand and wondering whether to put it on.
- **Must be obvious:** chauve = 秃头的（阴阳同形）。

### 56. frisé (curly · 卷发的) — `frise`

- **Sentence:** La petite fille aux cheveux frisés ressemble à un petit mouton. — *The little girl with curly hair looks like a little sheep.*
- **Scene:** A smiling little girl with a big cloud of tight white-blond curls stands next to a fluffy sheep in a meadow; their curly hair and wool look exactly alike.
- **Must be obvious:** frisé 卷的；la salade frisée 卷叶生菜。

### 57. tatouage (tattoo · 文身) — `tatouage`

- **Sentence:** Le marin montre fièrement le tatouage d'ancre sur son bras. — *The sailor proudly shows the anchor tattoo on his arm.*
- **Scene:** On a harbour, a sailor in a striped shirt flexes his arm to proudly show a big blue anchor tattoo; seagulls and boats are behind him.
- **Must be obvious:** tatouage 文身。

### 58. pousser (to push · 推) — `pousser`

- **Sentence:** Trois amis poussent la vieille voiture en panne. — *Three friends are pushing the old car that has broken down.*
- **Scene:** On a country road, three friends lean with all their strength against the back of a small old car that has broken down, with steam coming out of the engine.
- **Must be obvious:** pousser 推 ↔ tirer 拉（门上常写 Poussez / Tirez）。

### 59. tirer (to pull · 拉) — `tirer`

- **Sentence:** Le petit chien tire son maître vers le parc. — *The little dog pulls its owner towards the park.*
- **Scene:** A small energetic dog on a lead pulls its owner, who leans back and almost loses his balance, towards the gate of a green park.
- **Must be obvious:** tirer 拉 ↔ pousser 推。

### 60. glisser (to slip, to slide · 滑；滑倒) — `glisser`

- **Sentence:** Le serveur glisse sur une peau de banane avec son plateau. — *The waiter slips on a banana skin with his tray.*
- **Scene:** In a café, a waiter carrying a tray of drinks steps on a banana skin and slips, one leg up in the air; the glasses fly off the tray.
- **Must be obvious:** glisser 滑；glissant 滑的。
