

const RootLayout = ({ children }: {children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body style={{ backgroundColor: "#3D3C3A" }}>{children}</body>
        </html>
    );
}


export default RootLayout;