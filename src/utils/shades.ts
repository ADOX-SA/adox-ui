// /**
//  * Generate Tailwind-compatible shades from a single color
//  * @param {string} hex The hex code to generate shades from
//  * @param {boolean} halfShades Generate additional shades, e.g. at 150
//  * @param {boolean} gradient Generate gradient shades
//  * @returns {{[key: number]: string}}
//  */

// const baseShade = (baseColor: string[], shades: number[]): number => {
//   // quiero sacar un promedio de los colores
//   // para eso tengo que sumar los valores de los colores
//   // y dividirlos por la cantidad de colores
//   // el return tiene que estar entre 0 y 1000

//   let sum = 0;
//   for (let i = 0; i < baseColor.length; i++) {
//     sum += parseInt(baseColor[i], 16);
//   }
//   const average = sum / baseColor.length;
//   const baseShadeExact = Math.round((average / 255) * 900);

//   const closestShadeIndex = shades.reduce((acc, shade) => {
//     return Math.abs(shade - baseShadeExact) < Math.abs(acc - baseShadeExact)
//       ? shades.indexOf(shade)
//       : acc;
//   }, 0);
//   return closestShadeIndex;
// };

// function shadesOf(
//   hex: string,
//   halfShades: boolean = false
// ): { [key: number]: string } {
//   const baseColor = hexToRgbArray(hex);
//   const black = [0, 0, 0];
//   const white = [255, 255, 255];

//   let shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
//   if (halfShades)
//     shades = [...shades, 150, 250, 350, 450, 550, 650, 750, 850, 95].sort();
//   const result: { [key: number]: string } = {};
//   const baseColorShade = shades[baseShade(baseColor, shades)];

//   for (let shade of shades) {
//     if (baseColorShade === shade) {
//       result[shade] = hex;
//       continue;
//     }
//     const originalShade = shade;
//     const isDarkShade = shade > baseColorShade;
//     if (isDarkShade) shade -= baseColorShade;
//     const percentage = shade / baseColorShade;
//     console.log(percentage);
//     const startColor = isDarkShade ? black : baseColor;
//     const endColor = isDarkShade ? baseColor : white;

//     result[originalShade] = getColor(percentage, startColor, endColor);
//   }

//   return result;
// }

// function hexToRgbArray(hex: string) {
//   const originalHex = hex;

//   hex = hex.replace("#", "");
//   if (hex.length === 3) hex = hex + hex;

//   const r = hex.substring(0, 2);
//   const g = hex.substring(2, 4);
//   const b = hex.substring(4, 6);
//   const rgb = [r, g, b].map((channel) => {
//     try {
//       const intChannel = parseInt(channel, 16);
//       if (intChannel < 0 || intChannel > 255) throw new Error();
//       return channel;
//     } catch {
//       throw new Error(`Invalid hex color provided: ${originalHex}`);
//     }
//   });

//   return rgb;
// }

// function getColor(
//   percentage: number,
//   start: string[] | number[],
//   end: string[] | number[]
// ) {
//   const rgb = end.map((channel, index) => {
//     channel = typeof channel === "string" ? parseInt(channel, 16) : channel;
//     if (typeof start[index] === "string")
//       start[index] = parseInt(start[index], 16);
//     return Math.round(channel + percentage * (start[index] - channel));
//   });

//   const hex =
//     "#" +
//     rgb
//       .map((channel) => {
//         const component = channel.toString(16);
//         if (component.length === 1) return "0" + component;
//         return component;
//       })
//       .join("");
//   return hex;
// }
// export default shadesOf;
