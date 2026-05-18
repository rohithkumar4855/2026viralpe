export default function Container({ children }) {
    return (
        <div className="pt-20 bg-gradient-to-r from-[#F7EFEF] via-[#F7F4F3] to-[#FCF9F8] min-h-screen">
            {children}
        </div>
    )
}