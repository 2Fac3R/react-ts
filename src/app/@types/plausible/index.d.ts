enum PlausibleEvents {
  ADD_FOX = 'add_fox',
  REMOVE_FOX = 'remove_fox'
}

type Options = {
  callback?: () => void;
  props: Record<string, string | number | undefined>;
}

// Typing libraries that extend Window object
interface Window {
  plausible: (event: PlausibleEvents, options?: Options) => void;  // https://plausible.io/
}
