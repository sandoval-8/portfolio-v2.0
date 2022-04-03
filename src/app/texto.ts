export class texto {
  texto1:string= "it(`should have as title 'portfolio'`, () => {\n" +
    "   const fixture = TestBed.createComponent(AppComponent);\n" +
    "   const app = fixture.componentInstance;\n" +
    "   expect(app.title).toEqual('portfolio'); \n" +
    "}); \n" +

    "it('should render title', () => {; \n" +
    "   const fixture = TestBed.createComponent(AppComponent);\n" +
    "   fixture.detectChanges();\n" +
    "   const compiled = fixture.nativeElement as HTMLElement;\n" +
    "   expect(compiled.querySelector('.content span')?.textContent).toContain('portfolio app is running!');\n" +
    "}); ";
  texto2:string = "export class AppComponent { \n" +
    "  title = 'comunicacion-entre-componentes'; \n" +
    "  arraypadre = []; \n" +

    "  addItem(newItem: string[]) { \n" +
    "    this.arraypadre=newItem; \n" +
    "  } \n" +
    "}";
  texto3:string = "@Override\n" +
    "public String encode(CharSequence rawPassword) {\n" +
    "   if (rawPassword == null) {\n" +
    "       throw new IllegalArgumentException('rawPassword cannot be null');\n" +
    "   }\n" +
    "   String salt = getSalt();\n" +
    "   return BCrypt.hashpw(rawPassword.toString(), salt);\n" +
    "}\n" +
    " \n" +
    "private String getSalt() {\n" +
    "   if (this.random != null) {\n" +
    "       return BCrypt.gensalt(this.version.getVersion(), this.strength, this.random);\n" +
    "   }\n" +
    "   return BCrypt.gensalt(this.version.getVersion(), this.strength);\n" +
    "}"
}
