export default function cleanForm(fields) {
  for (let i = 0; i < fields.length; i++) {
    this.set(fields[i], '');
  }
}
