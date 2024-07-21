/**
 * @author mrdoob / http://mrdoob.com
 * @author Mugen87 / https://github.com/Mugen87
 * @author NikLever / http://niklever.com
 */

let audioElement = new Audio();
audioElement.src = 'C:/Users/ASUS/Documents/GitHub/DraptorCvX/audio/ENHYPEN 엔하이픈 Fatal Trouble Dance Practice.mp3'; // Replace with your audio path

class VRButton {

  constructor(renderer, options) {
    this.renderer = renderer;
    if (options !== undefined) {
      this.onSessionStart = options.onSessionStart;
      this.onSessionEnd = options.onSessionEnd;
      this.sessionInit = options.sessionInit;
      this.sessionMode = (options.inline !== undefined && options.inline) ? 'inline' : 'immersive-vr';
    } else {
      this.sessionMode = 'immersive-vr';
    }
    
    if (this.sessionInit === undefined) this.sessionInit = { optionalFeatures: [ 'local-floor', 'bounded-floor' ] };
  }

  showEnterVR(button) {

    let currentSession = null;
    const self = this;
    
    this.stylizeElement(button, true, 30, true);
    
    function onSessionStarted(session) {

      session.addEventListener('end', onSessionEnded);

      self.renderer.xr.setSession(session);
      self.stylizeElement(button, false, 12, true);
      
      button.textContent = 'EXIT VR';

      currentSession = session;
      
      if (self.onSessionStart !== undefined) self.onSessionStart();

      // Play music on VR session start and set it to loop
      audioElement.play().then(() => {
        audioElement.loop = true;
      });
    }

    function onSessionEnded( ) {

      currentSession.removeEventListener('end', onSessionEnded);

      self.stylizeElement(button, true, 12, true);
      button.textContent = 'ENTER VR';

      currentSession = null;
      
      if (self.onSessionEnd !== undefined) self.onSessionEnd();

      // Optional: Pause or stop audio on VR session end
      // audioElement.pause();
      // audioElement.currentTime = 0; // Reset playback time
    }

    // ... existing button styling and event listeners ...
  }

  // ... existing other methods ...
}

export { VRButton };