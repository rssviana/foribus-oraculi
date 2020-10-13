import React from 'react';

function SvgLocation() {
  return (
    <svg width="24px" height="24px" fill="none">
      <path fill="url(#location_svg__a)" d="M0 0h24v24H0z" />
      <defs>
        <pattern
          id="location_svg__a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.04167)" xlinkHref="#location_svg__b" />
        </pattern>
        <image
          id="location_svg__b"
          width={24}
          height={24}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBhYQDh2MyQ/tAAABw0lEQVQ4y43UP2hTURQG8F9qqiBODhEqkjZYa0Gw1AQcggXH4uAWXDoWMnQRHEMd7GKnLta1FAfXDsUltnRME3To0r9QhNI2YkkpOgjFIbfpy/Mhnunce8537vede+5N6bY7ikY8NOJcXUPduuNoQk/E7zNvQ8kv7z1W9MENr2yrSEuwZ06sGfxrP6uqZji+/dKpKamkSlLKmia6q5+67182pHl5Sp8TU4lpt722aAyU1S60zFtLJNNj11uTvhlDSlWl3chWglQY9xlMWgzyWzI9ilZsJwJ2ZF3BXbtg3xeFtBFfY4nX/QRbVmzZl/UkRNbl+eR5JzVjwaFze2ZcA/eMRy63ZIlD/WE54MicQVeNWtYIkKjlHHAgF5ZV05Hgspng3bTjzSVgSSnQOdMbAYzaC94tJ95dUEpryPuIBzb9jgA29Af5RzIhktfoUVcAe7JdfLOOQ7d0ChXUyWiF1E0vIoA5CzHJWS0ZqKhKoehHgPSadtQOdqwzGqTVlEHRpu8azlQNxOpHho9hTUPB7/c0VpvYeMOEpvL/P6D2KTXVWKfaUhOfaFtLRcuqWSU5OSWzVrW6P4E4iYyCvEfyJH8zfwAOPH4ZbvB/agAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yMlQxNjoxNDoyOSswMjowMIVBDEwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjJUMTY6MTQ6MjkrMDI6MDD0HLTwAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}

export default SvgLocation;
