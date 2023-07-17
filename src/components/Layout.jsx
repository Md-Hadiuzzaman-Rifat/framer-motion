/* eslint-disable react/prop-types */

const Layout = ({children}) => {
    return (
        <div className="w-full h-screen bg-violet-400 text-white">
            {children}
        </div>
    );
};

export default Layout;