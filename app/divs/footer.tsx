export default function Footer() {
    return (
      <div className="bg-slate-100 dark:bg-slate-800 p-10">
          <div className="py-9">
            <h1 className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent text-3xl font-bold">
              sonia tam
            </h1>
          </div>
          <div className="flex justify-left">
            <div className="inline-grid grid-cols-4 gap-32 py-4">
              <div className="space-y-2">
                <h2 className="text-slate-400 font-semibold text-sm">
                  DESIGN PROJECTS
                </h2>
                <ul className="text-slate-600 dark:text-slate-200 space-y-2 text-sm">
                  <li>airwallex website revamp</li>
                  <li>foodboo</li>
                  <li>PennInTouch</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h2 className="text-slate-400 font-semibold text-sm">
                  PM PROJECTS
                </h2>
                <ul className="text-slate-600 dark:text-slate-200 space-y-2 text-sm">
                  <li>localization automation</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h2 className="text-slate-400 font-semibold text-sm">
                  OTHER
                </h2>
                <ul className="text-slate-600 dark:text-slate-200 space-y-2 text-sm">
                  <li>about</li>
                  <li>resume</li>
                  <li>essays</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h2 className="text-slate-400 font-semibold text-sm">
                  CONTACT
                </h2>
                <ul className="text-slate-600 dark:text-slate-200 space-y-2 text-sm">
                  <li>soniatam6@gmail.com</li>
                  <li>+1 (445) 208-0204</li>
                  <li>
                    <a href="https://www.linkedin.com/in/sonia-tam/" className="underline">Linkedin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
  }
  
  
  