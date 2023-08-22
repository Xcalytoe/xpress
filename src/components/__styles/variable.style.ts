import { css } from 'styled-components';

const variables = css`
  :root {
    /* fonts  */
    --Primary-font: 'Inter', sans-serif;
    --Secondary-font: 'Poppins', sans-serif;

    /* color  */
    --white: white;
    --primary-text: #1a1619;
    --primary-dark: #1a141f;

    --btn-text-hover: #f2faff;

    --secondary-text: #606060;
    --secondary-text2: #808080;
    --secondary-text3: #4a4a4a;

    --border: #ccc;
    --border_2: #aba7af;
    --border_3: #6c6c6c;
    --border_4: #eee;
    --border_5: #ebeff2;
    --border_6: #c4c4c4;
    --background-primary: #039bf0;
    --background-primary_2: #f5f6f8;

    --shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.06);
    --shadow_2: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);

    --overlay: hsla(0, 0%, 42%, 0.8);
    --danger: #f00;
    --danger-bg: rgba(255, 0, 0, 0.1);
    --danger-bg-2: rgba(255, 0, 0, 0.1);
    --success: #27a713;
    --success-bg-2: rgba(39, 167, 19, 0.1);
    --success-bg: rgba(39, 167, 19, 0.1);
    --warning: #f90;
    --warning-bg-2: rgba(255, 153, 0, 0.1);
    --warning-bg: rgba(255, 153, 0, 0.1);
    --warning2: rgba(255, 153, 0, 0.1);
  }
`;
export default variables;
