import Link from 'next/link';

export default function Footer() {
    return (
      <div className="bg-stone_v3 dark:bg-slate-800 p-6 md:p-10">
          <div className="py-7">
            <h1 className="bg-cream_v3 bg-clip-text text-transparent text-4xl font-bold">
              <Link href='/'>sonia tam</Link>
            </h1>
          </div>
          <div className="flex justify-left">
            <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-32 py-4 pb-12">
              <div className="space-y-3">
                <h2 className="text-cream_v3 font-semibold text-sm">
                  DESIGNED...
                </h2>
                <ul className="text-cream_v3 dark:text-slate-200 space-y-3 text-xs md:text-sm">
                  <li>
                    <Link href='/projects/glean'><p>AI search redesign</p></Link></li>
                  <li><Link href='/projects/foodboo'>
                    <p>food truck app</p>
                  </Link></li>
                  <li><Link href='/projects/pennintouch'>
                    <p>course planning redesign</p>
                  </Link></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="text-cream_v3 font-semibold text-sm">
                  BUILT...
                </h2>
                <ul className="text-cream_v3 dark:text-slate-200 space-y-3 text-sm">
                  <li>
                    <Link href='/projects/website-revamp'><p>Airwallex's product narratives</p></Link></li>
                  <li><Link href='/projects/localization'>
                    <p>localization automation tool</p>
                  </Link></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="text-cream_v3 font-semibold text-sm">
                  OTHER
                </h2>
                <ul className="text-cream_v3 dark:text-slate-200 space-y-3 text-sm">
                  <li><Link href='/about'>
                    <p>about</p>
                  </Link></li>
                  <li><Link href='https://soniatam.substack.com/'>
                    <p>writings</p>
                  </Link></li>
                  <li><Link href='https://drive.google.com/file/d/12W4pJytDyxrtDuhZQqDSaD0lv0TeVJpz/view?usp=sharing'>
                    <p>resume</p>
                  </Link></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="text-cream_v3 font-semibold text-sm">
                  CONTACT
                </h2>
                <ul className="text-cream_v3 dark:text-slate-200 break-normal space-y-3 text-sm">
                  <li><p>soniatam6@gmail.com</p></li>
                  <li><p>+1 (445) 208-0204</p></li>
                </ul>
              </div>
            </div>
          </div>
          <p className='text-right text-cream_v3'>portfolio currently under construction</p>
          <p className='text-right text-cream_v3'>~ built myself with shadcn/ui</p>
      </div>
    );
}