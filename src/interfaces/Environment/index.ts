export default interface Environment {
  name: string;
  preview: string;
  walls: string;
  furniture: string;
  colors: Color[];
}

interface Color {
  color: string;
}
