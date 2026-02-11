interface SectionTitleProps {
    icon?: string;
    title: string;
    subtitle?: string;
}

export default function SectionTitle({ icon, title, subtitle }: SectionTitleProps) {
    return (
        <div className="flex items-center gap-3 mb-6">
            {icon && <span className="text-3xl">{icon}</span>}
            <div>
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                {subtitle && <p className="text-gray-600">{subtitle}</p>}
            </div>
        </div>
    );
}
