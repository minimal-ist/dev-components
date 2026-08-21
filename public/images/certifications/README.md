# Certification marks

Drop the registrar-issued artwork here, then add an entry to
`certificationMarks` in `app/data/company.ts`. The welcome panel renders the
marks when that list has entries and falls back to a typographic treatment
when it is empty.

These files are intentionally absent rather than recreated. There is no
generic ISO 9001 logo an organisation may display — ISO forbids certified
organisations from using the ISO logo, and what a certified company shows is
the **accredited mark of the registrar that issued its certificate** (TÜV,
BSI, DNV, Bureau Veritas, Intertek and so on), used under that registrar's
licence and usually shown with the certificate number. AS9100 is issued the
same way under the IAQG scheme.

Ask the registrar for the "certification mark" or "logo usage" pack. It
normally arrives as EPS/PNG with a one-page rules sheet covering minimum
size, clear space and whether the certificate number must appear alongside.

Prefer SVG, else PNG at 3× the display height (the panel renders them 48px
tall, so ~144px). Marks are issued on white and must not be recoloured,
stretched or clipped — the panel puts each on its own white plate for exactly
that reason.
