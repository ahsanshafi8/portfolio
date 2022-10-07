import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";
export const MailChimp = () => {
  const postUrl =
    "https://gmail.us12.list-manage.com/subscribe/post?u=6a86bbd8b86536d3b4465c635&amp;id=cee0f3617b";

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};
