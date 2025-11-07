import sanitize from "sanitize-html";
export function sanitizeData(data) {
  const sanitized = {};

  for (const [key, value] of Object.entries(data)) {
    sanitized[key] =
      typeof value === "string"
        ? sanitize(value, {
            allowedTags: ["b"],
          })
        : value;
  }

  return sanitized;
}

/*
Challenge:

DO NOT WRITE CODE IN SERVER.JS

1. Sanitize the incoming data. 
    Allow only the <b> tag and no attributes.
    
2. Test it with the code in story.md.
   
   hint.md for help
*/
