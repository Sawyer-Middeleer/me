"use client";

export function Hero() {
    return (
        <div className="w-full bg-black flex flex-col items-center justify-center pt-8 pb-8">
            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-center text-white">Hi, I&apos;m Sawyer</h1>
                <p className="text-center pt-4 text-white">Builder | Operator | Creator</p>
              </div>
            </div>
        </div>
    );
}