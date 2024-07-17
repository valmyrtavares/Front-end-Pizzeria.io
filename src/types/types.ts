export interface ParamsFetch {
  url: string;
  options: {
    method: string;
    cache?: RequestCache; // Definindo cache como um tipo RequestCache opcional
    // Outras propriedades de options...
  };
}

export interface MainBtnMenu {
  id: string;
  title: string;
  category: string;
  address: string;
}
