# HAFYZ official site (GitHub Pages)

Ini folder yang tinggal kamu **paste / replace** ke root repo GitHub Pages (`hafyz.my.id`).

## Cara pasang

1. Backup repo lama (atau branch baru `rebuild`).
2. Hapus file HTML lama di root (biar `/new-release/` yang rusak tidak ikut).
3. Copy **semua isi folder ini** ke root repo.
4. Commit + push ke branch yang dipakai GitHub Pages (biasanya `main`).
5. Pages settings: Deploy from branch `main` / `/ (root)`.
6. Custom domain tetap `hafyz.my.id` (file `CNAME` sudah ada).

Jangan pakai Git LFS untuk gambar. Pages sering gagal serve LFS.

## Yang sudah dibenahi

- `/new-release/` redirect ke single terbaru (bukan git patch)
- 404 custom
- Cover album ~200KB (bukan 12MB PNG)
- Hero video ~4MB 720p (bukan 15MB)
- Halaman stripped: **Out now** + link `ffm.to/chgstripped` yang benar
- Instagram artis: `instagram.com/shfldzm` (ganti di footer kalau handle-nya lain)
- Linktree 404 dihapus dari schema
- Store hanya produk yang bisa dibeli
- URL `.html` lama di-redirect
- `hreflang` EN/ID pakai `?lang=id`
- Countdown album 18 September + CTA pre-save

## Yang perlu kamu cek

- Handle Instagram: sekarang `shfldzm` (dari schema lama). Kalau yang benar `@itsmehafyz` atau yang lain, cari-ganti di HTML.
- Payhip IDs (Mi6Sf, KRXQ8, Z9bts, pVJBz) tetap yang live.
- Mailchimp, Seated, GoatCounter, Meta Pixel ID tidak diubah.

## Cloudflare (opsional, disarankan)

Arahkan DNS `hafyz.my.id` ke Cloudflare, proxy oranye, cache HTML pendek, cache `/assets/*` panjang. Image/video akan jauh lebih enak di Indonesia.

## GitHub Action

File `.github/workflows/pages-guard.yml` menolak deploy kalau ada HTML yang isinya `git apply` (penyebab `/new-release/` rusak).

## Isi zip

Copy **isi** folder ini ke root repo, termasuk:
- `.nojekyll`
- `CNAME` (`hafyz.my.id`)
- `.github/workflows/pages-guard.yml`
- `404.html`
