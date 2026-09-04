export const SITE = "https://hafyz.my.id";
export const ALBUM_DATE = "2026-09-18T00:00:00+07:00";

export const socials = {
  instagram: "https://www.instagram.com/shfldzm",
  labelInstagram: "https://www.instagram.com/sourplusentertainment",
  youtube: "https://www.youtube.com/@itsmehafyz",
  facebook: "https://www.facebook.com/itsmehafy",
  spotify: "https://open.spotify.com/artist/3kDl88tZO04at3S2UpREGd",
  apple: "https://music.apple.com/id/artist/hafyz/1754145654",
  imdb: "https://www.imdb.com/name/nm7701151/",
} as const;

export const links = {
  presaveAlbum: "https://ffm.to/xoxoimdoneahours",
  yckmn: "https://ffm.to/yckmn",
  chgStripped: "https://ffm.to/chgstripped",
  chasingHollowGold: "https://ffm.to/chasinghollowgold",
  xTraFabulous: "https://ffm.to/xfwyafterhours",
  spotifyTrackYckmn: "https://open.spotify.com/embed/track/66LswvXWUKVX7zVxX2TgaA",
  spotifyArtistEmbed: "https://open.spotify.com/embed/artist/3kDl88tZO04at3S2UpREGd",
  pressEmail: "mailto:presskit@hafyz.my.id",
  contactEmail: "mailto:contact@sourplusentertainment.com",
  newsletter:
    "https://hafyz.us14.list-manage.com/subscribe/post?u=71391a9e879a55c99a581a567&id=ac61a49750&f_id=004aeae0f0",
  seatedArtistId: "25937aa2-de5d-4ba7-b775-dab54dc3b2fc",
  pixelId: "1537787853829726",
} as const;

export const tracks = [
  "fucking runaway (After Hours)",
  "x-Friends (After Hours)",
  "the boy who cried loyalty (After Hours)",
  "brother figure (After Hours) ft. STIRAWN",
  "you can keep my name (After Hours)",
  "x-Tra Fabulous Without You (After Hours)",
  "nothing fabulous anymore (After Hours)",
  "passé (After Hours)",
  "friends for rent (After Hours)",
  "look at you now (After Hours)",
  "chasing hollow gold (After Hours)",
  "not tonight (After Hours)",
  "nothing left to prove (After Hours)",
] as const;

export const products = [
  {
    id: "cosmic",
    title: "Cosmic Orange Vinyl",
    album: "xoxo, i'm done (After Hours)",
    price: "Rp999.000",
    status: "preorder" as const,
    href: "https://payhip.com/b/Mi6Sf",
    image: "/assets/img/vinyl-orange",
    note: "Collector's edition. Includes exclusive x-Friends (After Hours Reimagined). Ships with the album on September 18.",
  },
  {
    id: "burgundy",
    title: "Burgundy Vinyl",
    album: "xoxo, i'm done (After Hours)",
    price: "Rp699.000",
    status: "preorder" as const,
    href: "https://payhip.com/b/KRXQ8",
    image: "/assets/img/vinyl-burgundy",
    note: "Standard After Hours vinyl. Release date September 18, 2026.",
  },
  {
    id: "xfriends",
    title: "x-Friends Vinyl LP",
    album: "x-Friends (After Hours)",
    price: "Rp299.000",
    status: "live" as const,
    href: "https://payhip.com/b/Z9bts",
    image: "/assets/img/vinyl-xfriends",
    note: "Standalone vinyl. Available now.",
  },
  {
    id: "yckmn-digital",
    title: "you can keep my name",
    album: "Digital single",
    price: "Digital",
    status: "live" as const,
    href: "https://payhip.com/b/pVJBz",
    image: "/assets/img/yckmn",
    note: "After Hours single. Instant delivery after payment.",
  },
] as const;

export const discography = [
  { year: "2017", title: "Paradise", kind: "Debut single", href: undefined as string | undefined },
  { year: "2020", title: "MANIC", kind: "Album", href: undefined as string | undefined },
  { year: "2025", title: "Immortal Romance", kind: "Extended Deluxe", href: undefined as string | undefined },
  { year: "2026", title: "xoxo, i'm done (After Hours)", kind: "Sixth album", href: "/xoxo-im-done-after-hours" },
] as const;

export const appearanceFormats = [
  { kicker: "01", title: "Guest attendance", body: "Awards, premieres, VIP receptions and invitation-only gatherings — without a performance requirement." },
  { kicker: "02", title: "Red carpet & press", body: "Photo calls, press lines, interviews and official media appearances." },
  { kicker: "03", title: "Panels & talks", body: "Moderated conversations on music, production, creativity and industry." },
  { kicker: "04", title: "Brand & industry", body: "Launches, conferences, corporate gatherings and selected brand activations." },
  { kicker: "05", title: "Festival guest", body: "Special-guest attendance at festivals and cultural programs." },
  { kicker: "06", title: "Jury & creative", body: "Judging, evaluations and selected educational or cultural roles." },
] as const;
