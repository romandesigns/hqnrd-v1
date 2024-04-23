export default class Api {
  static async validateRNC(rnc: string) {
    const res = await fetch(
      `https://api.digital.gob.do/v3/rnc/${rnc.replace(/-/g, "")}/validate`,
    );
    return await res.json();
  }
  static async validateCedula(cedula: string) {
    const ceduleId = cedula.replace(/-/g, "");
    const res = await fetch(
      `https://api.digital.gob.do/v3/cedulas/${ceduleId}/validate`,
    );
    return await res.json();
  }
}
