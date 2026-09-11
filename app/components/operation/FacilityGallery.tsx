import { Reveal } from "~/components/ui/Reveal";
import { facilityPhotos } from "~/data/gallery";
import { asset } from "~/lib/asset";

/**
 * The facility, in photographs.
 *
 * A fixed grid rather than a lightbox: the photographs are small (the
 * scraped ones run 350-1000px) so a full-screen viewer would only show that.
 * Each opens the original in a new tab for anyone who wants it larger.
 *
 * The lead photo takes a double cell. Every other photo sits in a fixed
 * aspect box with object-cover, so the mixed source sizes present as one
 * set instead of a ragged wall.
 */
export function FacilityGallery() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {facilityPhotos.map((photo, index) => (
        <Reveal
          key={photo.src}
          index={index % 4}
          className={photo.lead ? "col-span-2 row-span-2" : undefined}
        >
          <li className="group relative h-full">
            <a
              href={asset(photo.src)}
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full overflow-hidden bg-sheet-sunk"
            >
              <img
                src={asset(photo.src)}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                className={
                  photo.lead
                    ? "h-full w-full object-cover transition-transform duration-500 ease-(--ease-out-quint) group-hover:scale-[1.03]"
                    : "aspect-4/3 h-full w-full object-cover transition-transform duration-500 ease-(--ease-out-quint) group-hover:scale-[1.03]"
                }
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep/80 to-transparent px-4 pt-10 pb-3 text-sm font-semibold text-sheet">
                {photo.caption}
              </span>
            </a>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
