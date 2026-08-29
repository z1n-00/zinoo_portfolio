const NavCard = ({ children, className = '' }) => (
    <div
        className={`
            relative overflow-hidden
            p-2
            rounded-4xl
            bg-white/45 dark:bg-black/25
            border border-white/50 dark:border-white/10

            backdrop-blur-2xl
            backdrop-saturate-150

            shadow-[0_8px_32px_rgba(0,0,0,0.10),inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.04)]
            dark:shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.15)]

            ${className}
        `}
    >
        <div
            className="
                pointer-events-none
                absolute inset-x-3 top-0 h-px
                bg-gradient-to-r
                from-transparent
                via-white/80
                to-transparent
                dark:via-white/25
            "
        />

        {children}
    </div>
);

export default NavCard;