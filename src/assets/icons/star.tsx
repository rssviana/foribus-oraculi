import React from 'react';

function SvgStar() {
  return (
    <svg width="24px" height="24px" fill="none">
      <path fill="url(#star_svg__a)" d="M0 0h24v24H0z" />
      <defs>
        <pattern
          id="star_svg__a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.04167)" xlinkHref="#star_svg__b" />
        </pattern>
        <image
          id="star_svg__b"
          width={24}
          height={24}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBhYQETQDIZkfAAABfUlEQVQ4y43SPWuTYRTG8V+SUkuEIggGhziYN0K1aloLUgcV1A+gQkVEQXBzcnTwK7h3UkpxkyJWRUHBoYu4NMb0qSBSN5uKL4g1IY9LGlufJzXnXs65zvU/cA53SnyM2qWh7xi0oi7ZP3DdupZLca1EjDYg8MSwMSPa/cy/4rd9Slou9mNPWjINZtT62WNK035Q0jK1vXlYRdXdbj2jZlJm69JZRxUVFBRl0HDMcqdbsGA3vnvfeQsJgYIVdYHAksDHLZdJysrJy8spK1vmtJ/uG/jvbjs89MUEnPDDA4Pb2oc8tmZ8o5z01byhnva0Zxoqm6UJa55Lx9p3emHV4X/lI1Y9jQXmfTYa17jZ40N/cmvz2f5GTi0WWFSKB0ZUY4GqA72At50s5bJr3UMvKktF52SETiLhvLqmXz64KoWKUDEKnBLa44zX2mblZU1reueCtJZzUeCGdS+FHjnU1Qpmtb3xze0ocEfoleMR/aA5oXtRoOysXjFu70b6B9uPYarAaHpSAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTIyVDE2OjE3OjUyKzAyOjAwZrTqrAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yMlQxNjoxNzo1MiswMjowMBfpUhAAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}

export default SvgStar;
