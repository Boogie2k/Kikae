import Cookies from "universal-cookie";
import { apiUrl } from "./apiUrl";
import { toast } from "react-toastify";

export const getDeactivatedUsers = async () => {
    const cookies = new Cookies();
    const authToken = cookies.get('authToken');
    try {
        const response = await fetch(`${apiUrl}/user/get/all/deactivated/users/by/isUserDeactivated/status?status=true`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken}`,
            }
        });
        const result = await response.json();
        if (!response.ok) {
            toast(result.message, {
                autoClose: 5000,
                hideProgressBar: false,
            });
            return;
        }
        return result;
    }
    catch (error) {
        console.log(error);
        toast('an error occurred try again', {
            autoClose: 5000,
            hideProgressBar: false,
        });
    }
}


 {
    /*

     <div className="w-[1179px] h-[703px] p-12 bg-white rounded-3xl border border-black/25 inline-flex my-6">

      <div className="w-full h-full overflow-y-auto flex gap-16">
        <div className="flex flex-col justify-start items-start gap-[38px]">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            First Name
          </div>
          {allUsers.map((user) => (
            <div
              key={user.id}
              className="text-black text-base font-normal font-['DM Sans'] underline leading-[30px]"
            >
              {user.firstName}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start gap-[38px]">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Last Name
          </div>
          {allUsers.map((user) => (
            <div
              key={user.id}
              className="text-black text-base font-normal font-['DM Sans'] underline leading-[30px]"
            >
              {user.lastName}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start gap-[38px]">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Email
          </div>
          {allUsers.map((user) => (
            <div
              key={user.id}
              className="text-black text-base font-normal font-['DM Sans'] leading-[30px]"
            >
              {user.email}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start gap-[38px]">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Profile Picture
          </div>
          {allUsers.map((user) => (
            <div key={user.id} className="flex items-center gap-2">
              <img
                className="w-6 h-6 rounded-full"
                src={user?.userPhoto ? user?.userPhoto[0]?.imageUrl : ""}
                alt="Profile"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start gap-[38px]">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Photos
          </div>
          {allUsers.map((user) => (
            <div key={user.id} className="flex items-center gap-2">
              {user.userPhoto &&
                user.userPhoto.map((photo, index) => (
                  <img
                    key={index}
                    className="w-6 h-6 rounded-full"
                    src={photo.imageUrl}
                    alt={`Photo ${index}`}
                  />
                ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start gap-[38px]">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Actions
          </div>
          {allUsers.map((user) => (
            <div key={user.id} className="flex items-center gap-6">
              <button
                onClick={async () => {
                  await deactivateUser(user.id, !!user.isUserDeactivated);
                }}
                className="text-[#979797] text-base font-normal font-['DM Sans'] underline leading-[30px]"
              >
                {user.isUserDeactivated ? "Reactivate" : "Deactivate"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>


    */
  }