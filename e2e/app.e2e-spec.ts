import { EmpleadosPage } from './app.po';

describe('empleados App', () => {
  let page: EmpleadosPage;

  beforeEach(() => {
    page = new EmpleadosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
