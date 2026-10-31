// 离线缓存：第一次在线打开网站时，把所有页面、单词图片和公式排版脚本存到设备上，之后断网也能做题。
// build.py 生成网站时把下面两个占位换成真实的版本号和文件清单。
const VERSION = "b8cf27690c63";
const FILES = ["./", "french/", "stoch/", "manifest.webmanifest", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png"];     // 页面和小文件：每次发布整套更新
const IMAGES = ["french/img/abonnement.jpg", "french/img/accident.jpg", "french/img/accueil.jpg", "french/img/amende.jpg", "french/img/amical.jpg", "french/img/anniversaire.jpg", "french/img/appareil.jpg", "french/img/applaudir.jpg", "french/img/apprentissage.jpg", "french/img/arreter.jpg", "french/img/ascenseur.jpg", "french/img/atteindre.jpg", "french/img/attendre.jpg", "french/img/atterrir.jpg", "french/img/auberge.jpg", "french/img/auteur.jpg", "french/img/avocat.jpg", "french/img/bagage.jpg", "french/img/bague.jpg", "french/img/balcon.jpg", "french/img/ballon.jpg", "french/img/banlieue.jpg", "french/img/barbe.jpg", "french/img/batterie.jpg", "french/img/bavard.jpg", "french/img/benevolat.jpg", "french/img/bibliotheque.jpg", "french/img/billet.jpg", "french/img/blessure.jpg", "french/img/bonheur.jpg", "french/img/bouillir.jpg", "french/img/boulangerie.jpg", "french/img/bourse.jpg", "french/img/bruyant.jpg", "french/img/caisse.jpg", "french/img/calculer.jpg", "french/img/candidature.jpg", "french/img/carrefour.jpg", "french/img/carriere.jpg", "french/img/casserole.jpg", "french/img/ceinture.jpg", "french/img/celebre.jpg", "french/img/chaine.jpg", "french/img/chanson.jpg", "french/img/chantier.jpg", "french/img/chauffage.jpg", "french/img/chaussette.jpg", "french/img/chef-d-oeuvre.jpg", "french/img/cher.jpg", "french/img/chercheur.jpg", "french/img/chiffre.jpg", "french/img/chomage.jpg", "french/img/ciel.jpg", "french/img/clavier.jpg", "french/img/cle.jpg", "french/img/client.jpg", "french/img/coeur.jpg", "french/img/colere.jpg", "french/img/colis.jpg", "french/img/colline.jpg", "french/img/commander.jpg", "french/img/compte.jpg", "french/img/concert.jpg", "french/img/confiance.jpg", "french/img/connaissance.jpg", "french/img/construire.jpg", "french/img/copain.jpg", "french/img/correspondance.jpg", "french/img/couple.jpg", "french/img/courir.jpg", "french/img/course.jpg", "french/img/couverture.jpg", "french/img/critique.jpg", "french/img/cuire.jpg", "french/img/danger.jpg", "french/img/danse.jpg", "french/img/debat.jpg", "french/img/dechet.jpg", "french/img/decoller.jpg", "french/img/delai.jpg", "french/img/demenagement.jpg", "french/img/depaysement.jpg", "french/img/depense.jpg", "french/img/depenser.jpg", "french/img/dessiner.jpg", "french/img/devoir.jpg", "french/img/diplome.jpg", "french/img/dispute.jpg", "french/img/douane.jpg", "french/img/doue.jpg", "french/img/douleur.jpg", "french/img/echarpe.jpg", "french/img/echouer.jpg", "french/img/economiser.jpg", "french/img/ecran.jpg", "french/img/election.jpg", "french/img/electricite.jpg", "french/img/elegant.jpg", "french/img/elever.jpg", "french/img/embaucher.jpg", "french/img/embouteillage.jpg", "french/img/emission.jpg", "french/img/empecher.jpg", "french/img/emploi-du-temps.jpg", "french/img/emploi.jpg", "french/img/en-ligne.jpg", "french/img/enceinte.jpg", "french/img/energie.jpg", "french/img/enfance.jpg", "french/img/ennui.jpg", "french/img/enquete.jpg", "french/img/enregistrer.jpg", "french/img/enseignement.jpg", "french/img/entrainement.jpg", "french/img/entreprise.jpg", "french/img/entretien.jpg", "french/img/environnement.jpg", "french/img/epice-adj.jpg", "french/img/epice.jpg", "french/img/epicerie.jpg", "french/img/eplucher.jpg", "french/img/epreuve.jpg", "french/img/eprouver.jpg", "french/img/epuise.jpg", "french/img/equipe.jpg", "french/img/escalier.jpg", "french/img/espece.jpg", "french/img/espoir.jpg", "french/img/essayer.jpg", "french/img/etagere.jpg", "french/img/etoile.jpg", "french/img/evier.jpg", "french/img/ex-a-condition-que.jpg", "french/img/ex-afin-de.jpg", "french/img/ex-au-lieu-de.jpg", "french/img/ex-auparavant.jpg", "french/img/ex-aussitot.jpg", "french/img/ex-autrement-dit.jpg", "french/img/ex-bien-que.jpg", "french/img/ex-celibataire.jpg", "french/img/ex-cependant.jpg", "french/img/ex-citoyennete.jpg", "french/img/ex-coupable.jpg", "french/img/ex-d-ailleurs.jpg", "french/img/ex-davantage.jpg", "french/img/ex-decider.jpg", "french/img/ex-decouverte.jpg", "french/img/ex-demissionner.jpg", "french/img/ex-desormais.jpg", "french/img/ex-divorcer.jpg", "french/img/ex-droit.jpg", "french/img/ex-echanger.jpg", "french/img/ex-emprunter.jpg", "french/img/ex-en-revanche.jpg", "french/img/ex-environ.jpg", "french/img/ex-epaule.jpg", "french/img/ex-eviter.jpg", "french/img/ex-faim.jpg", "french/img/ex-foie.jpg", "french/img/ex-grace-a.jpg", "french/img/ex-inegalite.jpg", "french/img/ex-innocent.jpg", "french/img/ex-lors-de.jpg", "french/img/ex-malgre.jpg", "french/img/ex-mince.jpg", "french/img/ex-oublier.jpg", "french/img/ex-parmi.jpg", "french/img/ex-pauvrete.jpg", "french/img/ex-peu-a-peu.jpg", "french/img/ex-preter.jpg", "french/img/ex-prevenir.jpg", "french/img/ex-quant-a.jpg", "french/img/ex-ranger.jpg", "french/img/ex-rencontre.jpg", "french/img/ex-s-habituer.jpg", "french/img/ex-scientifique.jpg", "french/img/ex-se-souvenir.jpg", "french/img/ex-se-tromper.jpg", "french/img/ex-syndicat.jpg", "french/img/ex-tandis-que.jpg", "french/img/ex-temoin.jpg", "french/img/exiger.jpg", "french/img/experience.jpg", "french/img/expliquer.jpg", "french/img/expose.jpg", "french/img/exposition.jpg", "french/img/facture.jpg", "french/img/falaise.jpg", "french/img/fichier.jpg", "french/img/fidele.jpg", "french/img/fier.jpg", "french/img/fierte.jpg", "french/img/fievre.jpg", "french/img/fontaine.jpg", "french/img/foret.jpg", "french/img/formation.jpg", "french/img/four.jpg", "french/img/frais.jpg", "french/img/frontiere.jpg", "french/img/fusee.jpg", "french/img/gagner.jpg", "french/img/gant.jpg", "french/img/gaspiller.jpg", "french/img/gene.jpg", "french/img/genou.jpg", "french/img/gout.jpg", "french/img/gouter.jpg", "french/img/gouvernement.jpg", "french/img/gratte-ciel.jpg", "french/img/gratuit.jpg", "french/img/greve.jpg", "french/img/grippe.jpg", "french/img/guerir.jpg", "french/img/habitant.jpg", "french/img/honte.jpg", "french/img/immeuble.jpg", "french/img/impot.jpg", "french/img/incendie.jpg", "french/img/inondation.jpg", "french/img/inquietude.jpg", "french/img/inscription.jpg", "french/img/interdire.jpg", "french/img/inventer.jpg", "french/img/itineraire.jpg", "french/img/jalousie.jpg", "french/img/jeu.jpg", "french/img/joue.jpg", "french/img/joueur.jpg", "french/img/journal.jpg", "french/img/juge.jpg", "french/img/jumeau.jpg", "french/img/laboratoire.jpg", "french/img/leger.jpg", "french/img/lent.jpg", "french/img/lessive.jpg", "french/img/licencier.jpg", "french/img/livrer.jpg", "french/img/logiciel.jpg", "french/img/loi.jpg", "french/img/louer.jpg", "french/img/lourd.jpg", "french/img/loyer.jpg", "french/img/lune.jpg", "french/img/lunettes.jpg", "french/img/lutter.jpg", "french/img/machine.jpg", "french/img/mairie.jpg", "french/img/malheur.jpg", "french/img/manifestation.jpg", "french/img/manteau.jpg", "french/img/maquillage.jpg", "french/img/maree.jpg", "french/img/mariage.jpg", "french/img/marque.jpg", "french/img/marquer.jpg", "french/img/matiere.jpg", "french/img/medicament.jpg", "french/img/melanger.jpg", "french/img/memoire.jpg", "french/img/menacer.jpg", "french/img/menage.jpg", "french/img/menton.jpg", "french/img/mesurer.jpg", "french/img/microscope.jpg", "french/img/mode.jpg", "french/img/mot-de-passe.jpg", "french/img/musee.jpg", "french/img/nager.jpg", "french/img/naissance.jpg", "french/img/natation.jpg", "french/img/neveu.jpg", "french/img/note.jpg", "french/img/nuage.jpg", "french/img/numerique.jpg", "french/img/orchestre.jpg", "french/img/ordonnance.jpg", "french/img/outil.jpg", "french/img/panier.jpg", "french/img/panneau.jpg", "french/img/paresseux.jpg", "french/img/partager.jpg", "french/img/paysage.jpg", "french/img/peau.jpg", "french/img/peche.jpg", "french/img/peintre.jpg", "french/img/permis-de-conduire.jpg", "french/img/petit-enfant.jpg", "french/img/piece.jpg", "french/img/pieton.jpg", "french/img/piqure.jpg", "french/img/place.jpg", "french/img/planete.jpg", "french/img/plat.jpg", "french/img/plein.jpg", "french/img/poele.jpg", "french/img/policier.jpg", "french/img/pompier.jpg", "french/img/pont.jpg", "french/img/porter.jpg", "french/img/poubelle.jpg", "french/img/poumon.jpg", "french/img/pret.jpg", "french/img/preuve.jpg", "french/img/prison.jpg", "french/img/prix.jpg", "french/img/profiter.jpg", "french/img/propre.jpg", "french/img/proteger.jpg", "french/img/public.jpg", "french/img/publicite.jpg", "french/img/quai.jpg", "french/img/quartier.jpg", "french/img/quotidien.jpg", "french/img/randonnee.jpg", "french/img/rapide.jpg", "french/img/rater.jpg", "french/img/rayon.jpg", "french/img/recette.jpg", "french/img/rechauffement.jpg", "french/img/recherche.jpg", "french/img/recu.jpg", "french/img/recycler.jpg", "french/img/rediger.jpg", "french/img/reflechir.jpg", "french/img/regretter.jpg", "french/img/rembourser.jpg", "french/img/remise.jpg", "french/img/remplir.jpg", "french/img/renouvelable.jpg", "french/img/rentable.jpg", "french/img/repas.jpg", "french/img/reseau.jpg", "french/img/ressembler.jpg", "french/img/ressource.jpg", "french/img/retard.jpg", "french/img/reunion.jpg", "french/img/reussir.jpg", "french/img/reviser.jpg", "french/img/rhume.jpg", "french/img/ride.jpg", "french/img/robot.jpg", "french/img/roman.jpg", "french/img/rubrique.jpg", "french/img/s-entrainer.jpg", "french/img/s-habiller.jpg", "french/img/sain.jpg", "french/img/salaire.jpg", "french/img/sale.jpg", "french/img/scene.jpg", "french/img/sculpture.jpg", "french/img/se-blesser.jpg", "french/img/se-depecher.jpg", "french/img/se-detendre.jpg", "french/img/se-disputer.jpg", "french/img/se-facher.jpg", "french/img/se-marier.jpg", "french/img/se-plaindre.jpg", "french/img/se-promener.jpg", "french/img/secheresse.jpg", "french/img/securite.jpg", "french/img/sejour.jpg", "french/img/sensible.jpg", "french/img/serveur.jpg", "french/img/societe.jpg", "french/img/sondage.jpg", "french/img/soulagement.jpg", "french/img/souris.jpg", "french/img/sous-titre.jpg", "french/img/soutenir.jpg", "french/img/souvenir.jpg", "french/img/spectateur.jpg", "french/img/sportif.jpg", "french/img/stade.jpg", "french/img/sucre.jpg", "french/img/supprimer.jpg", "french/img/tableau.jpg", "french/img/tache.jpg", "french/img/taille.jpg", "french/img/telecharger.jpg", "french/img/tempete.jpg", "french/img/tetu.jpg", "french/img/tiroir.jpg", "french/img/toit.jpg", "french/img/tousser.jpg", "french/img/traverser.jpg", "french/img/tribunal.jpg", "french/img/trottoir.jpg", "french/img/urgences.jpg", "french/img/vacances.jpg", "french/img/valise.jpg", "french/img/velo.jpg", "french/img/vendeur.jpg", "french/img/vide.jpg", "french/img/visage.jpg", "french/img/vitrine.jpg", "french/img/voisin.jpg", "french/img/vol.jpg", "french/img/voler.jpg", "french/img/voleur.jpg", "french/img/voter.jpg"];   // 单词图片：按文件名保留，只下载新增的
const CDN = ["https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-svg.js"];
const PAGES = "pages-" + VERSION, IMG = "images", EXT = "external";

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    await (await caches.open(PAGES)).addAll(FILES);
    const ext = await caches.open(EXT);
    await Promise.allSettled(CDN.map(async u => { if (!(await ext.match(u))) await ext.add(new Request(u, { mode: "cors" })); }));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== PAGES && k !== IMG && k !== EXT) await caches.delete(k);
    // 删掉已经不在清单里的图片
    const img = await caches.open(IMG), keep = new Set(IMAGES.map(u => new URL(u, self.registration.scope).href));
    for (const r of await img.keys()) if (!keep.has(r.url)) await img.delete(r);
    await self.clients.claim();
  })());
});

// 页面：先联网取最新版（3 秒没回应就用缓存）；图片和外部字体、脚本：有缓存就直接用
async function pageFirst(req) {
  const cache = await caches.open(PAGES);
  try {
    const res = await Promise.race([fetch(req), new Promise((_, no) => setTimeout(() => no(new Error("timeout")), 3000))]);
    if (res.ok) cache.put(req, res.clone());
    return res;
  } catch (err) {
    return (await cache.match(req, { ignoreSearch: true })) || (await caches.match(req, { ignoreSearch: true })) || Response.error();
  }
}
async function cacheFirst(req, name) {
  const hit = await caches.match(req, { ignoreSearch: name === IMG });
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok || res.type === "opaque") (await caches.open(name)).put(req, res.clone());
  return res;
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    if (!url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
    e.respondWith(/\/img\//.test(url.pathname) ? cacheFirst(req, IMG).catch(() => Response.error()) : pageFirst(req));
  } else if (/^(fonts\.googleapis\.com|fonts\.gstatic\.com|cdnjs\.cloudflare\.com)$/.test(url.hostname)) {
    e.respondWith(cacheFirst(req, EXT).catch(() => Response.error()));
  }
});

// 图片较多（约 7 MB），装好后由页面发 "prefetch" 再在后台下载，不耽误第一次打开
let filling = null;
async function fillImages() {
  const img = await caches.open(IMG);
  const have = new Set((await img.keys()).map(r => r.url));
  const missing = IMAGES.map(u => new URL(u, self.registration.scope).href).filter(u => !have.has(u));
  for (let i = 0; i < missing.length; i += 12)
    await Promise.allSettled(missing.slice(i, i + 12).map(u => img.add(u)));
  const ext = await caches.open(EXT);
  await Promise.allSettled(CDN.map(async u => { if (!(await ext.match(u))) await ext.add(new Request(u, { mode: "cors" })); }));
}
// 页面问“离线准备好了吗”时回答缓存情况
self.addEventListener("message", e => {
  if (e.data === "prefetch") { filling = filling || fillImages().finally(() => { filling = null; }); e.waitUntil(filling); return; }
  if (e.data !== "status") return;
  e.waitUntil((async () => {
    const pages = (await (await caches.open(PAGES)).keys()).length;
    const imgs = (await (await caches.open(IMG)).keys()).length;
    const mj = !!(await (await caches.open(EXT)).match(CDN[0]));
    e.source.postMessage({ type: "status", version: VERSION, pages, files: FILES.length, imgs, images: IMAGES.length, mathjax: mj, busy: !!filling });
  })());
});
