const apiUrl = 'http://localhost:5000';
const recommendationUrl = 'http://localhost:8000';

/**
 * Actions API Functions
 */

/**
 * Fetches an action by its ID.
 * @param {string} id - The ID of the action to fetch.
 * @returns {Promise} A Promise that resolves to the retrieved action data.
 */
async function getActionById(id, token) {
    try {
        const response = await fetch(`${apiUrl}/api/actions/id/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching objectives:', error);
        throw error;
    }
}

/**
 * Fetches a list of recommended actions by their ID.
 * @returns {Promise} A Promise that resolves to the retrieved action data.
 */
async function getRecommendedActions(token) {
    var actions = []

    try {
        const response = await fetch(`${recommendationUrl}/recommendation`, {
            method: 'GET'
        });
        const data = await response.json();
        for (let i = 0; i < data.length; i++) {
            var action = await getActionById(data[i], token);
            actions.push(action);
          }
        
          return actions;
    } catch (error) {
        console.error('Error fetching recommended actions:', error);
        return [];
    }
}

/**
 * Fetches all actions for a user.
 * @param {string} username - The username of the user.
 * @returns {Promise} A Promise that resolves to the retrieved data.
 */
async function getActionsForUser(username, token) {
    try {
        const response = await fetch(`${apiUrl}/api/actions/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching actions:', error);
        throw error;
    }
}

/**
 * Fetches actions related to an objective.
 * @param {string} objectiveId - The ID of the objective.
 * @returns {Promise} A Promise that resolves to the retrieved actions data.
 */
async function getObjectiveActions(objectiveId, token) {
    try {
        const response = await fetch(`${apiUrl}/api/actions/objective/${objectiveId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching objective actions:', error);
        throw error;
    }
}

/**
 * Creates a new action.
 * @param {Object} actionData - The data for the new action.
 * @returns {Promise} A Promise that resolves to the created action data.
 */
async function createNewAction(actionData, token) {
    try {
        const response = await fetch(`${apiUrl}/api/actions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(actionData),
        });
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error creating action:', error);
        throw error;
    }
}

/**
 * Edits a new action.
 * @param {Object} actionData - The data for the modified action.
 * @returns {Promise} A Promise that resolves to the edited action data.
 */
async function editAction(actionData, token) {
    try {
        const response = await fetch(`${apiUrl}/api/actions/edit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(actionData),
        });
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error creating action:', error);
        throw error;
    }
}

/**
 * Deletes an action.
 * @param {string} actionId - The ID of the action to delete.
 * @returns {Promise} A Promise that resolves to the deleted action data.
 */
async function deleteAction(actionId, token) {
    try {
        const response = await fetch(`${apiUrl}/api/actions/${actionId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting action:', error);
        throw error;
    }
}

/**
 * Finishes an action.
 * @param {string} actionId - The ID of the action to finish.
 * @param {number} realDuration - The real duration of the action.
 * @returns {Promise} A Promise that resolves to the finished action data.
 */
async function finishAction(actionId, realDuration, token) {

    try {
        const response = await fetch(`${apiUrl}/api/actions/${actionId}/finish`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ realDuration }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error finish action:', error);
        throw error;
    }
}

/**
 * Resets an action.
 * @param {string} actionId - The ID of the action to reset.
 * @returns {Promise} A Promise that resolves to the reset action data.
 */
async function resetAction(actionId, token) {

    try {
        const response = await fetch(`${apiUrl}/api/actions/${actionId}/reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error finish action:', error);
        throw error;
    }
}

/**
 * Adds a comment to an action.
 * @param {string} id - The ID of the action to which the comment is added.
 * @param {string} comment - The comment text.
 * @returns {Promise} A Promise that resolves to the updated action data.
 */
async function addCommentToAction(id, comment, token) {
    try {
        const response = await fetch(`${apiUrl}/api/actions/${id}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ comment }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding comment:', error);
        throw error;
    }
}

export {
    getActionById,
    getRecommendedActions,
    getActionsForUser,
    getObjectiveActions,
    createNewAction,
    editAction,
    deleteAction,
    finishAction,
    resetAction,
    addCommentToAction
};
