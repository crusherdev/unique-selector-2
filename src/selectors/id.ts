import { SELECTOR_TYPE } from '../constants'
import { SelectorData } from '../interface/result'
import { getUniqueScore } from '../utils'

/**
 * Returns id, value and uniqueness of HTML node
 * @param htmlNode
 * @param target
 * @return SelectorData
 */
export const getIDSelectors = (htmlNode:HTMLElement, target:HTMLElement):SelectorData[] => {
  const elementId = htmlNode.id;
  if(!elementId) return [];

  const querySelector = `#${elementId}`;
  const uniquenessScore = getUniqueScore(querySelector, target);

  return [{
    type: SELECTOR_TYPE.ID,
    value: querySelector,
    uniquenessScore
  }]
}
