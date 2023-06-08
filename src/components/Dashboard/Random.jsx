import useRole from "../../hooks/useRole";

const Random = () => {
    const {role} = useRole();
    console.log(role);

    return (
        <div>
            random page
            <p>{role}</p>
            <button  className="text-black hover:text-white text-sm py-2 px-3 border border-blue-600 hover:bg-blue-600 rounded font-semibold">Make Admin</button>
        </div>
    );
};

export default Random;
