import React from 'react';

function SvgOrganization() {
  return (
    <svg width="24px" height="24px" fill="none">
      <path fill="url(#organization_svg__a)" d="M0 0h24v24H0z" />
      <defs>
        <pattern
          id="organization_svg__a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.03125)" xlinkHref="#organization_svg__b" />
        </pattern>
        <image
          id="organization_svg__b"
          width={32}
          height={32}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBhYQBReP6D84AAACW0lEQVRIx53UTUhUYRTG8d9Y+QEtZECyD2llCBouomwRRUSEYLRpabktItq0j8RqI7SsbVFBgoSrwuiDiCioRaRmhYRUNLswo6hJTgtvtzvNjE6dd3Wee/7Pvfe873tylor1tuCZD/4jNronknXPxn/FO31O8RA+6/wXfKWnwlcnrLXWCV+Fp1bWbrBbCIfS/JAQdtducFKYk0vznDnhZK14t5fCbIk2K7zUvTzcYMiPpHGbUnVTovwwpGEpvNlzIXz0RXiiFbR6InzxUQjPNVfD690VwpgWvYrCJ2PGfBKKerUYE8Jd9ZUNLgnhVJId9jM9BT8dTtRTQrhUCT8ghGsZJa/fddf1y2fUa0I4UG7wSJjUtGybm0wKj/6WdwhhYPltwoAQdpSKV4TC0luURoOCcGUxqUvEzbjhe00G391IiNQgpx3TNeGSyvbFo75osEETXtds8BpNNvwxaAHbdNWEd9mWocDx9MgUDC4JDyqktcd/i6dLZk84XxU//1fladgqhBf65O0yXupdEovfOW6XvD4vhLCVUaGQ3rB6D4Xxigbjwv30IjUrCKPMCGdL/jLMW1GGrzAvHMwoZ4WZOnnMZ+S3WG1dmcE6qzGXUeaRrzOBfRm5F6+8KzN45xX2ZpR9mOCYEM6VNOpMxR6cEb7Zn2TnhHCMRreE8N6IqWR7Lmsrw9tcTp5OGfFeCLc08sciu4qu6tcjL69Hv6uKZTU3NUpm/yo77bHdhNumHXWk4mD55qILOuzV5bE7HihWO3FrDJuxkL5rwYxhayqV5lSPBu06MO1N9UnxCyYeCbabDYctAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTIyVDE2OjA1OjIzKzAyOjAwD33n/AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yMlQxNjowNToyMyswMjowMH4gX0AAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}

export default SvgOrganization;
