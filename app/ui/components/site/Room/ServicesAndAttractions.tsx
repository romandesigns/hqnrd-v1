"use client";

export function ServicesAndAttractions() {
  return (
    <>
      <h5 className="mb-2 text-sm font-bold">Restaurants</h5>
      <ul className="flex flex-col gap-2">
        <li className="grid w-full grid-cols-[1fr_1fr_1fr_1fr] grid-rows-1 gap-1 text-xs">
          <span>Rating: 4.5</span>
          <span>Abuelitos</span>
          <span>1km</span>
          <span className="text-primary-500 underline">Google Map</span>
        </li>
        <li className="grid w-full grid-cols-[1fr_1fr_1fr_1fr] grid-rows-1 gap-1 text-xs">
          <span>Rating: 4.5</span>
          <span>Byblos</span>
          <span>1km</span>
          <span className="text-primary-500 underline">Google Map</span>
        </li>
      </ul>
      <h5 className="mb-2 mt-4 text-sm font-bold">Clubs</h5>
      <ul className="flex flex-col gap-2">
        <li className="grid w-full grid-cols-[1fr_1fr_1fr_1fr] grid-rows-1 gap-1 text-xs">
          <span>Rating: 4.5</span>
          <span>Abuelitos</span>
          <span>1km</span>
          <span className="text-primary-500 underline">Google Map</span>
        </li>
        <li className="grid w-full grid-cols-[1fr_1fr_1fr_1fr] grid-rows-1 gap-1 text-xs">
          <span>Rating: 4.5</span>
          <span>La Vara</span>
          <span>1km</span>
          <span className="text-primary-500 underline">Google Map</span>
        </li>
      </ul>
    </>
  );
}
