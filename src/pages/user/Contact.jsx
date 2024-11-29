import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAttachEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div> Contact Page</div>

      <div className="my-16 py-20">
        <div className="flex justify-around">
          <div className="space-y-4">
            <p className="flex items-center space-x-4">
              <IoLocationOutline size={21} />{" "}
              <span>Ethiopia, Addis Ababa, Bole</span>
            </p>
            <p className="flex items-center space-x-4">
              <MdPhone size={21} /> <span>+2519-252-556-40</span>
            </p>
            <p className="flex items-center space-x-4">
              <MdOutlineAttachEmail size={21} /> <span>admin@national.et</span>
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-5xl font-bold text-slate-700">
              Contact Us
            </h2>
            const form = useForm()
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <h2 className="mb-3 text-xl">Follow us</h2>
            <div className="flex space-x-5">
              <img src="/socialmedia/facebook-4-24.ico" alt="" />
              <img src="/socialmedia/linkedin-6-24.ico" alt="" />
              <img src="/socialmedia/telegram-3-24.ico" alt="" />
              <img src="/socialmedia/twitter-4-24.ico" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
