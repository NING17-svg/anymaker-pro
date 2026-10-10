import inventory from "../../ad-placement-manifest.json";
import type { AdConfig } from "@/types/ads";

// Page Builder replaces the sample inventory and leaves matching codes empty; only Adsterra Integrator supplies real codes.
export const ads: AdConfig = {
  units: {
    "page-top-728x90": "<script>\n  atOptions = {\n    'key' : '471e0a600f36f4211b6c10eda9e8275d',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/471e0a600f36f4211b6c10eda9e8275d\"></script>",
    "page-top-468x60": "<script>\n  atOptions = {\n    'key' : '1aa1843225c69cbd3c2f8d1bf0689f05',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/1aa1843225c69cbd3c2f8d1bf0689f05\"></script>",
    "page-top-320x50": "<script>\n  atOptions = {\n    'key' : 'fbce7e58fcdbc11dc775ed9ab4f5a5ba',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/fbce7e58fcdbc11dc775ed9ab4f5a5ba\"></script>",
    "home-after-entry-native": "<script async=\"async\" data-cfasync=\"false\" src=\"https://bauval.org/21/c27468e541f0dc7951488c7a49041a85\"></script>\n<div id=\"container-c27468e541f0dc7951488c7a49041a85\"></div>",
    "home-directory-end-468x60": "<script>\n  atOptions = {\n    'key' : '1aa1843225c69cbd3c2f8d1bf0689f05',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/1aa1843225c69cbd3c2f8d1bf0689f05\"></script>",
    "home-directory-end-320x50": "<script>\n  atOptions = {\n    'key' : 'fbce7e58fcdbc11dc775ed9ab4f5a5ba',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/fbce7e58fcdbc11dc775ed9ab4f5a5ba\"></script>",
    "guide-native-native": "<script async=\"async\" data-cfasync=\"false\" src=\"https://bauval.org/21/c27468e541f0dc7951488c7a49041a85\"></script>\n<div id=\"container-c27468e541f0dc7951488c7a49041a85\"></div>",
    "guide-section-break-728x90": "<script>\n  atOptions = {\n    'key' : '471e0a600f36f4211b6c10eda9e8275d',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/471e0a600f36f4211b6c10eda9e8275d\"></script>",
    "guide-section-break-468x60": "<script>\n  atOptions = {\n    'key' : '1aa1843225c69cbd3c2f8d1bf0689f05',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/1aa1843225c69cbd3c2f8d1bf0689f05\"></script>",
    "guide-section-break-320x50": "<script>\n  atOptions = {\n    'key' : 'fbce7e58fcdbc11dc775ed9ab4f5a5ba',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/fbce7e58fcdbc11dc775ed9ab4f5a5ba\"></script>",
    "guide-before-faq-468x60": "<script>\n  atOptions = {\n    'key' : '1aa1843225c69cbd3c2f8d1bf0689f05',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/1aa1843225c69cbd3c2f8d1bf0689f05\"></script>",
    "guide-before-faq-320x50": "<script>\n  atOptions = {\n    'key' : 'fbce7e58fcdbc11dc775ed9ab4f5a5ba',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/fbce7e58fcdbc11dc775ed9ab4f5a5ba\"></script>",
    "footer-sponsored-smartlink": "https://araplhn.org/4/4c91477790e87725e69ff21164771a79",
  },
};

export const adInventory = inventory;
