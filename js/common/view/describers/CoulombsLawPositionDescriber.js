// Copyright 2019-2020, University of Colorado Boulder


import PositionDescriber from '../../../../../inverse-square-law-common/js/view/describers/PositionDescriber.js';
import coulombsLaw from '../../../coulombsLaw.js';

class CoulombsLawPositionDescriber extends PositionDescriber {

  /**
   * @param {ISLCModel} model
   * @param {string} object1Label
   * @param {string} object2Label
   */
  constructor( model, object1Label, object2Label ) {
    super( model, object1Label, object2Label );
  }

  /**
   *
   * @protected
   * @param {number} distance
   * @param {number} numberOfRegions - for crosscheck
   * @returns {number}
   * @override
   */
  getDistanceIndex( distance, numberOfRegions ) {
    assert && assert( distance > 0, 'Distance between spheres should always be positive.' );

    // TODO: implement when working on CL descriptions.
    return 0;
  }
}

coulombsLaw.register( 'CoulombsLawPositionDescriber', CoulombsLawPositionDescriber );
export default CoulombsLawPositionDescriber;