export const Links = ({ link, git }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img
        className="git-google"
        src={
          require(git
            ? "../../assets/211904_social_github_icon.svg"
            : "../../assets/2993685_brand_brands_google_logo_logos_icon.svg")
            .default
        }
        alt="google-logo"
      />
    </a>
  );
};
